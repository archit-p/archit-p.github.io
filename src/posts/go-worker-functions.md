---
slug: "/blog/creating-worker-function-goroutines-channels"
date: 2020-08-20
title: "Creating a Worker Function in Go using Goroutines and Channels"
description: "Introduction to Goroutines and Channels in Go, along with an example to follow along"
keywords: "go, multithreading, programming"
---

There are times when it's important to split up your long-running jobs into parts or do them parallelly using multithreading. Having worked with DPDK in the past, I had used the rte_ring for inter-process communication. Workers were a prevalent concept in DPDK - being used for packet pipelines and processing.

When I recently started programming in Go, I discovered how easy Go makes it to write a multi-threaded application. Consider this example.

```go
// FooBar appens "foobar" to a string
func FooBar(content string) {
	content += "foo"
	// do heavy processing
	content += "bar"
	// do heavy processing
}
```

Our function `FooBar` appends "foobar" to the content string while doing arbitrary heavy processing tasks. We'll be focusing on multithreading with this function. To make the function multithreading friendly, let's make it a worker function.

```go
// FooBar appens "foobar" to a string
func FooBar(jobs <-chan string, results chan<- string) {
	for j := range jobs {
		j += "foo"
		// do heavy processing
		j += "bar"
		// do heavy processing
		results <- j
	}
}
```

We've transformed the function by making it take arguments as channels. We keep track of to-do jobs through the jobs channel and push our results into the results channel. Let's now look at how to call our worker function.

```go
func main() {
	// initialize channels for sending jobs and receiving results
	job := make(chan string, 5)
	res := make(chan string, 5)
	defer close(job)
	defer close(res)

	// launch the worker in a new goroutine
	go FooBar(job, res)

	job <- "hello"

	fmt.Println(<-res)
}
```

We've just created a basic worker function. Note that we make a call to defer closing the channels to notify our workers to exit cleanly. Now, to make our jobs extensible, let's define them as a new type.

```go
// Job holds meta related to a processing job
type Job struct {
	ID string
	Content string
}

// FooBar appens "foobar" to a string
func FooBar(jobs <-chan Job, results chan<- Job) {
	for j := range jobs {
		j.Content += "foo"
		// do heavy processing
		j.Content += "bar"
		// do heavy processing
		results <- j
	}
}
```

We can launch multiple workers as goroutines to speed up processing.

```go
func main() {
	...

	numWorkers := 10
	for i := 0; i < numWorkers; i++ {
		// launch the worker in a new goroutine
		go FooBar(job, res)
	}
	...
}
```

We have an extensible model for multithreading using worker goroutines and channels for passing information. By tweaking `numWorkers` to the number of cores on our PCs, we can optimally use the CPU and speed up computation.
