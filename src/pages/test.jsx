import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    fetch("https://chatapppublish.azurewebsites.net/api/Account/Register", {
      method: "POST",
      body: {
        Email: "test123@gmail.com",
        Password: "test1234",
        ConfirmPassword: "test1234",
      },
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    });
  }, []);

  return (
    <div className="bg-coolgray-500 h-full">
      <div
        className="bg-black text-white overflow-y-scroll flex flex-col"
        style={{ width: "300px", height: "300px" }}
      >
        <div className="flex-grow"></div>
        <div className="self-end">test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    </div>
  );
}
