import { useEffect } from "react";

const EmailChips = ({
  guestsList,
  setInputData,
  inputData,
}: {
  guestsList: string[] | (string | undefined)[];
  setInputData: any;
  inputData: any;
}) => {
  useEffect(() => {
    M.Chips.init(document.querySelector(".chips") as Element, {
      placeholder: "Guests Email",
      onChipAdd: (element, chip) => {
        guestsList.push(
          chip.textContent?.toString().replace("close", "") as string
        );
        setInputData({
          ...inputData,
          ["guests"]: guestsList,
        });
      },
      onChipDelete: (element, chip) => {
        guestsList = guestsList.map((email) => {
          if (
            email !==
            (chip.textContent?.toString().replace("close", "") as string)
          ) {
            return email;
          }
        });
        guestsList = guestsList.filter((email) => email !== undefined);
        setInputData({
          ...inputData,
          ["guests"]: guestsList,
        });
      },
    });
  }, []);

  return (
    <div className="input-field col s12">
      <div className="chips chips-placeholder"></div>
    </div>
  );
};

export default EmailChips;
