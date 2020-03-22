export const text = `
Before we dive into what makes an API RESTful and what constraints and rules you should follow if you want to create RESTful APIs, let’s explain 2 key terms:
Client — the client is the person or software who uses the API. It can be a developer, for example you, as a developer, can use Twitter API to read and write data from Twitter, create a new tweet and do more actions in a program that you write. Your program will call Twitter’s API. The client can also be a web browser. When you go to Twitter website, your browser is the client who calls Twitter API and uses the returned data to render information on the screen.
Resource — a resource can be any object the API can provide information about. In Instagram’s API, for example, a resource can be a user, a photo, a hashtag. Each resource has a unique identifier. The identifier can be a name or a number.
Now let’s get back to REST.
A RESTful web application exposes information about itself in the form of information about its resources. It also enables the client to take actions on those resources, such as create new resources (i.e. create a new user) or change existing resources (i.e. edit a post)
In order for your APIs to be RESTful, you have to follow a set of constraints when you write them. The REST set of constraints will make your APIs easier to use and also easier to discover, meaning a developer who is just starting to use your APIs will have an easier time learning how to do so.
REST stands for REpresentational State Transfer.
It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.
For example, when a developer calls Instagram API to fetch a specific user (the resource), the API will return the state of that user, including their name, the number of posts that user posted on Instagram so far, how many followers they have, and more
`
export const text_sentences = [
    'Before we dive into what makes an API RESTful and what constraints and rules you should follow if you want to create RESTful APIs, let’s explain 2 key terms:',
    'Client — the client is the person or software who uses the API. It can be a developer, for example you, as a developer, can use Twitter API to read and write data from Twitter, create a new tweet and do more actions in a program that you write. Your program will call Twitter’s API. The client can also be a web browser. When you go to Twitter website, your browser is the client who calls Twitter API and uses the returned data to render information on the screen.',
    'Resource — a resource can be any object the API can provide information about. In Instagram’s API, for example, a resource can be a user, a photo, a hashtag. Each resource has a unique identifier. The identifier can be a name or a number.',
    'Now let’s get back to REST.',
    'A RESTful web application exposes information about itself in the form of information about its resources. It also enables the client to take actions on those resources, such as create new resources (i.e. create a new user) or change existing resources (i.e. edit a post).',
    'In order for your APIs to be RESTful, you have to follow a set of constraints when you write them. The REST set of constraints will make your APIs easier to use and also easier to discover, meaning a developer who is just starting to use your APIs will have an easier time learning how to do so.',
    'REST stands for REpresentational State Transfer.',
    'It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.',
    'For example, when a developer calls Instagram API to fetch a specific user (the resource), the API will return the state of that user, including their name, the number of posts that user posted on Instagram so far, how many followers they have, and more.',
]

export const summary = `
Before we dive into what makes an API RESTful and what constraints and rules you should follow if you want to create RESTful APIs, let’s explain 2 key terms:
It can be a developer, for example you, as a developer, can use Twitter API to read and write data from Twitter, create a new tweet and do more actions in a program that you write.
When you go to Twitter website, your browser is the client who calls Twitter API and uses the returned data to render information on the screen.
The REST set of constraints will make your APIs easier to use and also easier to discover, meaning a developer who is just starting to use your APIs will have an easier time learning how to do so.
It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.
For example, when a developer calls Instagram API to fetch a specific user (the resource), the API will return the state of that user, including their name, the number of posts that user posted on Instagram so far, how many followers they have, and more,
`

export const sum_sentences = [
    'Before we dive into what makes an API RESTful and what constraints and rules you should follow if you want to create RESTful APIs, let’s explain 2 key terms:',
    'It can be a developer, for example you, as a developer, can use Twitter API to read and write data from Twitter, create a new tweet and do more actions in a program that you write.',
    'When you go to Twitter website, your browser is the client who calls Twitter API and uses the returned data to render information on the screen.',
    'The REST set of constraints will make your APIs easier to use and also easier to discover, meaning a developer who is just starting to use your APIs will have an easier time learning how to do so.',
    'It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.',
    'For example, when a developer calls Instagram API to fetch a specific user (the resource), the API will return the state of that user, including their name, the number of posts that user posted on Instagram so far, how many followers they have, and more,',
]

export const selection = [5, 1, 6, 1, 0, 6, 1, 3, 0, 0, 0, 2, 3, 3, 6, 2, 6, 6]

export const colors = [
    [117, 117, 117],
    [255, 245, 204],
    [255, 236, 161],
    [255, 219, 74],
    [255, 204, 0],
]