import ButtonYes from "./ButtonYes"
import InputLoco from "./InputLoco"


function LogIn() {
    return (
        <>
            <form >
                
                <div className="container border border-2 rounded-2" >
                    <div className="row m-2">
                        <div className="col">
                            <InputLoco placeholder="Email" />

                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <InputLoco placeholder="Password" />

                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <ButtonYes title="Submit" />

                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default LogIn;