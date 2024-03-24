
const App = () => {


    const username = 'Md Kamal Hosen'
    const userActive = true
    const passed = true
    const mark = 98




    return (
        <div>

   
            
            <h2>Hi, this is {username}.</h2>
            <p>{passed ? 'I\'m passed' : 'I\'m not passed'} in my last example. My mark is {mark}%</p>
            {userActive && <p>I'\m active member of this community</p>}

            {(()=>{
                return <h3>This is a function</h3>
            })()} 

        </div>
    );
};

export default App;