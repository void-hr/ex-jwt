import { Button } from "@/ui/button"
import { Input } from "@/ui/input"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Label } from "@/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/ui/tabs"
import { useState } from "react"

import axios from 'axios';

const App = () => {

  const [ signUp, setSignUp ] = useState({});
  const [ logIn, setIsLogIn ] = useState({});
  const handleSignup = (e) => {
    setSignUp((prev) => ({...prev, [e.target.id]: e.target.value })) 
  }

  const handleLogin = (e) => {
    setIsLogIn((prev) => ({...prev, [e.target.id]: e.target.value })) 
  }

  const handleSignupSubmit = () => {
      axios.post('http://localhost:8000/create', {signUp}) .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleLoginSubmit = () => {
    axios.post('http://localhost:8000/login', {logIn}) .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  return (
    <div className="h-screen w-full flex bg-background  text-popover justify-center items-center">

    <Tabs defaultValue="account" className="w-[450px]">
      <TabsList className="grid w-full gap-4 grid-cols-2">
        <TabsTrigger value="account" className="outline rounded-xl outline-[1px]  outline-white">Signup</TabsTrigger>
        <TabsTrigger value="password" className="outline rounded-xl outline-[1px] outline- outline-white">Signin</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Signup for new account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="name" onChange={handleSignup} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="username" onChange={handleSignup}  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email" onChange={handleSignup} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password"  type="password" placeholder="password" onChange={handleSignup} />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSignupSubmit}>Submit </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Signin</CardTitle>
            <CardDescription>
              Login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2" >
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="email" type="email"   onChange={handleLogin}/>
            </div>
            <div className="space-y-1" >
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="password" type="password"  onChange={handleLogin}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLoginSubmit}>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    </div>
  )
}

export default App