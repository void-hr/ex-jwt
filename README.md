# ex-jwt
Implementing jwt in express

- [x] Basic boilerplate
- [ ] Stateful Authentication
- [ ] Stateless Authentication


## Stateful Authentication

- Stateful authentication is way to identify user session by creating session on backend and generating session id it sent the session to client and its getting stored in session storage .

- So whenever user makes any request with server locates a session on its side and check there is a session or by checking properties in session state finds the user information so thus user can get resource by server.


1. Revoke Session Time:

    Session is getting created on server so server have access of revoke session anytime

2. Easy to manage session :

    session management will be easy server know how much sessions are active like videos streaming platform .

3. Session data can be stolen:

    It is impossible to steal session information from the session identifier because it is just an identifier associated with the session

4. Not easy to scale:

    For adding new instance there will be need to do additional changes in session storage


  Here's a simplified flow of the stateful authentication process:
   
  - User Authentication:
    
    User enters credentials (username and password) on the client side.
    Server verifies credentials and, upon successful authentication, generates a session ID.
    The session ID is associated with the user's session data on the server.
  
  - Session ID Transmission:
    
    Server sends the session ID to the client, usually as a cookie in the HTTP response header.
    The client stores the session ID locally (e.g., as a cookie or in local storage).
   
  - Subsequent Requests:
    
    For each subsequent request, the client includes the session ID in the HTTP request header.
    The server extracts the session ID from the request header.

  - Server-side Validation:
    
    The server validates the session ID against its session data.
    If the session ID is valid and the user is authenticated, the server processes the request.

  - Session Maintenance:
    
    Session data is updated and maintained on the server during each interaction.
    The session may include information such as user roles, permissions, and other relevant details.

 - Logout:

   When the user logs out, the server invalidates the session ID.
   The client may delete the session ID cookie or perform other cleanup actions.














## Stateless Authentication

- In stateless Authentication in which session data get stored in client side. State get Signed with key using various methods such as JWT so server only have to verify that is take signature matches or not.

- Stateless authentication also called token bases authentication because of all state data is signed and encrypted so whenever user request anything from server it verify user token and response in behalf of that.


1. Low server overhead:

    In stateful authentication state is getting stored on backend thus server have to work more on it but here server only have to verify key so no need to store session server.

2. Easy to Scale:

    Easy to scale thus session data is getting store on user end so no matter which data is getting changed don't have to do much efforts on it.

3. Cant revoke Session:

   Can't rovoke session anytime thus server is not maintaining the session and when server creating session it have expire time so you have to work much on it .
