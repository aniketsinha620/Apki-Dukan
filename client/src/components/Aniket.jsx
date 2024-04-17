import React from 'react'

const Aniket = () => {
    const [email, setEmail] = React.useState('aniketsinha6202@gmail.com')
    const [password, setPassword] = React.useState('123456789')

    const getApiCall = async () => {
        console.log("hello")
        try {
            const res = await fetch("http://localhost:8000/aniket", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email, password
                })
            })
            console.log(res)
        }
        catch (error) {
            console.log("error")
        }
    }
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore, esse nemo beatae voluptate voluptatibus accusantium consectetur unde quia, accusamus cupiditate est nobis libero necessitatibus. Delectus eos cum cupiditate ipsam!
            Lorem ipsuvoluptates eos eaque sunt laborum, nemo dolore nostrum animi veritatis natus in repellat doloremque rerum consequatur deserunt eum reiciendis, totam id beatae, voluptas cupiditate? Repellat!
            <button onClick={getApiCall}>Click Me</button>
        </div>
    )
}

export default Aniket
