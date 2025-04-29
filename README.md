# react-router-tsx

A lightweight, type-safe wrapper around React Router that eliminates magic strings and enforces type-checked routes. Define routes as structured objects, get auto-completion for links & params, and ensure runtime type safety—all with a clean, intuitive API.

## Features

- TypeScript support out of box
- Supports both data and declarative modes
- Consistent interface across both routing modes for seamless switching
- Built-in parameter parsing with strict type validation
- Object-based routing
- Progressive API that scales from simple to complex use cases

## Table of contents

- [**Motivation**](#motivation)
- [**Installation**](#installation)
- [**Compatibility**](#compatibility)
- [**Usage**](#usage)
- [**Api**](#api-)
- [**License**](#license)

## Motivation

**Becasue having to write strings when using navigation components or hooks**

```tsx
// 🙅‍♂️ You can easy make a mistake
<Link to="/home">Go to home page</Link>
```

```tsx
// ✅ No strings - no problems
<TSLink to={routes.home}></TSLink>
```

**Because react-router doesn't have params validation**

```tsx
// 🙅‍♂️ You need to remember param name to use it
const HomePage = () => {
  return <Link to="/posts/42">Go to post with id: 42</Link>
}
/* ... */
const PostPage = () => {
  const { id } = useParams()
  //      ^ type of "id" will be a string
  return <div>Post ID: {id}</div>
}
```

```tsx
// ✅ Type-safe params
const routes = {
  home: createRoute(),
  post: createRoute({ id: 'number' }),
}

/* ... */

const HomePage = () => {
  return (
    // "params" prop will be required if route has params
    <TSLink to={routes.post} params={{ id: 42 }}>
      Go to post with id: 42
    </TSLink>
  )
}

const PostPage = () => {
  const { id } = useTSParams(routes.post)

  // You can use "id.value" after check if it's valid
  // "id.value" would be a number
  if (!id.valid) {
    return <div>Invalid post id</div>
  }

  return <div>Post ID: {id.value}</div>
}
```
