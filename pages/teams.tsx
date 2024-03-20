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
    const MeetCode = createString();
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
      <div class="card">
        <div class="infos">
          <div class="image"></div>
          <div class="info">
            <div>
              <p class="name">Join Meet</p>

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
        <button class="request" type="button" onClick={HandleJoinMeet}>
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
