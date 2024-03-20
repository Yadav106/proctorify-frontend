'use client'
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const router = useRouter();
  const { roomID } = router.query;
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    if (roomID) {
      const mymeeting = async () => {
        const appId = 1583218693;
        const serverSecret = "4685e1363fcb5ea1df5ad580e906d7ca";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appId,
          serverSecret,
          roomID,
          Date.now().toString(),
          "Enter Your Name"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
          container: meetingContainerRef.current,
          sharedLinks: [
            {
              name: "Copy Link",
              url: `http://localhost:3000/room/${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
          showUserList: true,
          showTextChat: true,

        });
      };
      mymeeting();
    }
  }, [roomID]);

  console.log(meetingContainerRef)

  return <div className="meet" ref={meetingContainerRef}>
  </div>;
};

export default Room;

