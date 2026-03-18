# 42 Barcelona — molasz-a

Welcome to my 42 Common Core journey. This repository serves as a central hub for all the projects I have completed at 42 Barcelona, organized via Git submodules.

## 💡 About 42 Network

42 is a global, tuition-free computer science school that originated in Paris in 2013 to disrupt traditional education. It operates without teachers, classrooms, or textbooks. Instead, it relies on a 100% Peer-to-Peer learning model where students are responsible for their own success and the evaluation of their peers.
The Methodology:

- Project-Based Learning: The curriculum consists of increasingly complex technical challenges that must be solved from scratch.

- Gamification: Progress is tracked through "levels" and "ranks," mirroring a skill tree in a video game.

- The Piscine: Every student's journey begins with the "Piscine," a 4-week intensive C programming bootcamp to test logic and resilience.

- Common Core: After the Piscine, students enter the Common Core, a rigorous path covering everything from Unix logic and algorithms to systems administration and web development.

## 🚀 Projects Overview

The following projects represent the curriculum's progression, focusing on C, C++, and infrastructure.
[**🌐 View Interactive Project Map**](https://molasz.github.io/42/)

### Rank 0: The Foundation

**[Libft](https://www.google.com/search?q=./piscine)**: A custom-made C library re-implementing standard functions to be used throughout the curriculum.

### Rank 1: Imperative Programming

**[ft_printf](https://www.google.com/search?q=./common-core/rank-1/ft_printf)**: An implementation of the standard `printf` function in C.
**[get_next_line](https://www.google.com/search?q=./common-core/rank-1/get_next_line)**: A function that returns a line read from a file descriptor, handling buffer management and memory leaks.

### Rank 2: Algorithms & Graphics

**[push_swap](https://www.google.com/search?q=./common-core/rank-2/push_swap)**: A highly optimized sorting algorithm using two stacks and a limited set of operations.
**[fdf](https://www.google.com/search?q=./common-core/rank-2/fdf)**: A 3D wireframe renderer that converts a coordinates map into an isometric projection.
**[pipex](https://www.google.com/search?q=./common-core/rank-2/pipex)**: A project exploring UNIX mechanisms by recreating the behavior of shell pipes and redirections.

### Rank 3: Concurrency & Shell

**[philosophers](https://www.google.com/search?q=./common-core/rank-3/philosophers)**: An introduction to multithreading and mutexes through the classic Dining Philosophers problem.
**[minishell](https://www.google.com/search?q=./common-core/rank-3/minishell)**: Creation of a functional bash-like shell, including pipes, redirections, and signal handling.

### Rank 4: Virtualization & Logic

**[inception](https://www.google.com/search?q=./common-core/rank-4/inception)**: System administration project using Docker to set up a small infrastructure of services (NGINX, WordPress, MariaDB).

### Rank 5: Object-Oriented Programming

**[cpp_modules](https://www.google.com/search?q=./common-core/rank-5/cpp_modules)**: A series of modules designed to learn the fundamentals of C++ and Object-Oriented Programming (OOP).

---

## 🛠️ Usage

To clone this repository along with all project submodules:

```bash
git clone --recursive https://github.com/Molasz/42.git
```

If you have already cloned it, you can initialize the submodules with:

```bash
git submodule update --init --recursive
```

---

_Created by molasz-a (42 Barcelona)_
