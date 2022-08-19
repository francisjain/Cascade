import React, { useEffect, useState } from 'react'

function Test() {
    const array1 = [
        { name: "francis", age: "24" },
        { name: "don", age: "22" }
    ]
    const [array, setArray] = useState([])
    useEffect(() => {
        setArray(array1)
    }, [])

    const handleChange = (e) => {
        const { name, checked } = e.target;
        console.log(e.target);
        if (name === "allSelect") {
            let tempUser = array.map((user) => {
                return { ...user, isChecked: checked };
            });
            setArray(tempUser);
        } else {
            let tempUser = array.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setArray(tempUser);
        }
    };

    return (
        <div className='select__body'>

            <form>
                <h1>User Data</h1>
                <div>
                    <input
                        type="checkbox"
                        name="allSelect"
                        checked={!array.some((user) => user?.isChecked !== true)}
                        id='01'
                        onChange={handleChange} />
                    <label htmlFor='01'> All Select</label>
                </div>
                {
                    array.map(d => (
                        <div>
                            <input
                                type="checkbox"
                                name={d.name}
                                checked={d?.isChecked || false}
                                id={d.age}
                                onChange={handleChange} />
                            <label htmlFor={d.age}> {d.name}</label>
                        </div>
                    ))
                }
            </form>
        </div>
    )
}

export default Test