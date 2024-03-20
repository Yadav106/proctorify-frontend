import { useState, useCallback } from "react";
import { useRouter } from "next/router";

const teams = () => {
  const [inputVal, setinputVal] = useState("");
  const [Click, setClick] = useState(false);
  const [NewInputvalue, setNewInputvalue] = useState("");
  const router = useRouter();
  const user = "member";


  const HandleButtonClick = useCallback(() => {
    router.push(`/rooms/${inputVal}`);
  }, [router, inputVal]);

  const createString = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let meetCode = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      meetCode += characters.charAt(randomIndex);
    }

    return meetCode;
  };


  const CreateMeet = async () => {
    const team_name = sessionStorage.getItem('team_name')
    const MeetCode = createString();

    const url = "http://localhost:8000/proctorify/v1.0/team/start_meeting"
    const body = {
      'name': team_name,
      'code': MeetCode
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set content type for JSON data
      },
      body: JSON.stringify(body),
    }

    const response = await fetch(url, options);

    setClick(true);
    setinputVal(MeetCode);
    router.push(`/rooms/${MeetCode}`)
    alert("Meet Created");

  };
  const HandleJoinMeet = async () => {
    router.push(`/rooms/${NewInputvalue}`);
  };

  return (
    <div>
      {true && (
        <button className="p-2" onClick={CreateMeet}>
          Create
        </button>
      )}
      <div className="card">
        <div className="infos">
          <div className="image"></div>
          <div className="info">
            <div>
              <p className="name">Join Meet</p>

              <input
                type="text"
                placeholder="Enter Code only"
                style={{
                  height: "30px",
                  borderRadius: "40px",
                  placeSelf: "center",
                  textAlign: "center",
                }}
                onChange={(e) => {
                  setNewInputvalue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <button className="request" type="button" onClick={HandleJoinMeet}>
          Join
        </button>
      </div>

      {true && (
        <p className="text-white p-2 ">Meet Code: {inputVal}</p>
      )}
    </div>
  );
};

export default teams;
