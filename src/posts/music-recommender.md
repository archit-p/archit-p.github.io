---
slug: "/blog/collaborative-filtering-based-music-artist-recommendation"
date: 2021-02-07
title: "Collaborative Filtering Based Music Artist Recommendation"
description: "A Music Artist Recommender for finding artists similar to the ones you've been listening to."
keywords: "data science, data, machine learning, recommender systems"
---

# Collaborative Filtering Based Music Artist Recommendation

This notebook illustrates a technique to recommend similar artists to users based on users music listening history. For this task, I have utilized the Last.fm dataset ([link](http://files.grouplens.org/datasets/hetrec2011/hetrec2011-lastfm-readme.txt)), which contains music listening history for 2000 users from Last.fm.

## Part 1: Loading the Data

Data is read from a tab separated file into a list of dictionaries. I am also loading the artist meta so that we can print out artist names instead of the IDs.


```python
from collections import defaultdict

userArtistPath = "/Users/archit-p/sources/github/data-science/datasets/hetrec2011-lastfm-2k/user_artists.dat"
artistMetaPath = "/Users/archit-p/sources/github/data-science/datasets/hetrec2011-lastfm-2k/artists.dat"
```


```python
def loadData():
    file = open(userArtistPath, 'r')

    header = file.readline()
    header = header.strip().split('\t')

    global dataset
    dataset = []
    
    for line in file:
        fields = line.strip().split('\t')
        d = dict(zip(header, fields))
        d['userID'] = int(d['userID'])
        d['artistID'] = int(d['artistID'])
        d['weight'] = int(d['weight'])
        dataset.append(d)
```


```python
loadData()
```

Each row of the dataset looks as follows


```python
dataset[0]
```




    {'userID': 2, 'artistID': 51, 'weight': 13883}



Now, loading artist meta for better understanding the results.


```python
def loadMeta():
    file = open(artistMetaPath, 'r')

    header = file.readline()
    header = header.strip().split('\t')
    
    global artistMeta
    artistMeta = defaultdict(dict)
    
    for line in file:
        fields = line.strip().split('\t')
        d = dict(zip(header, fields))
        d['id'] = int(d['id'])
        artistMeta[d['id']] = d
```


```python
loadMeta()
```

    {'id': 3317, 'name': 'Drake', 'url': 'http://www.last.fm/music/Drake', 'pictureURL': 'http://userserve-ak.last.fm/serve/252/31573727.jpg'}


Artist meta contains the name of artist, profile URL on Last.fm and an image of the artist.


```python
artistMeta[51]
```




    {'id': 51,
     'name': 'Duran Duran',
     'url': 'http://www.last.fm/music/Duran+Duran',
     'pictureURL': 'http://userserve-ak.last.fm/serve/252/155668.jpg'}



## Part 2: Finding Similarities

To perform collaborative filtering, I have created set of users for a given artist and set of artists that a particular user has listened to.


```python
usersPerArtist = defaultdict(set)
artistsPerUser = defaultdict(set)

for d in dataset:
    user, artist = d['userID'], d['artistID']
    usersPerArtist[artist].add(user)
    artistsPerUser[user].add(artist)
```

To calculate similarities between sets, I use Jaccard Similarity.


```python
def Jaccard(s1, s2):
    numer = len(s1.intersection(s2))
    denom = len(s1.union(s2))
    return numer / denom
```

The similarity function rates the artists based on the Jaccard Similarity between the set of users who have listened to the two artists.


```python
def mostSimilar(iD, n):
    similarities = []
    users = usersPerArtist[iD]
    for i2 in usersPerArtist:
        if i2 == iD: continue
        sim = Jaccard(users, usersPerArtist[i2])
        similarities.append((sim,i2))
    similarities.sort(reverse=True)
    return similarities[:n]
```

### Making a recommendation

To make a recommendation, the function takes artistID and number of recommendations as input. I'll be using Kanye West as an example.


```python
artistMeta[331]
```




    {'id': 331,
     'name': 'Kanye West',
     'url': 'http://www.last.fm/music/Kanye+West',
     'pictureURL': 'http://userserve-ak.last.fm/serve/252/8942513.jpg'}



The similarity function returns a list of artists along with the similarity score.


```python
mostSimilar(artistMeta[331]['id'], 10)
```




    [(0.22598870056497175, 1613),
     (0.18421052631578946, 468),
     (0.17763157894736842, 527),
     (0.1736111111111111, 475),
     (0.17094017094017094, 329),
     (0.16097560975609757, 907),
     (0.15760869565217392, 327),
     (0.15184381778741865, 295),
     (0.14838709677419354, 547),
     (0.1437125748502994, 330)]




```python
[artistMeta[x[1]]['name'] for x in mostSimilar(artistMeta[331]['id'], 10)]
```




    ['Jay-Z',
     'Usher',
     "Lil' Wayne",
     'Eminem',
     'Justin Timberlake',
     'Timbaland',
     'Chris Brown',
     'Beyoncé',
     'Kid Cudi',
     'T.I.']



Using the artist meta loaded earlier, we can print out the artist info.
