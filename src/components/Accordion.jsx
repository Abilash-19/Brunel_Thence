import React from "react";

export default function Accordion() {
  const contents = [
    {
      head: "Do you offer freelancers?",
      ans: false,
    },
    {
      head: "What’s the guarantee that I will be satisfied with the hired talent?",
      ans: false,
    },
    {
      head: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
      ans: true,
    },
    {
      head: "Why should I not go to an agency directly?",
      ans: false,
    },
    {
      head: "Who can help me pick a right skillset and duration for me?",
      ans: false,
    },
  ];
  return (
    <>
      {contents.map((content) => {
        return (
          <>
            <div
              className={`inline-flex justify-between ${
                content.ans ? "" : "border-b border-gray-300"
              } pb-[24px] mt-[36px]`}
            >
              <span className="font-[600] text-[20px] text-lg text-gray-800  ">
                {content.head}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {content.ans ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 11V13H19V11H5Z" fill="black" />
                  </svg>
                ) : (
                  <path
                    d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                    fill="black"
                  />
                )}
              </svg>
            </div>
            {content.ans && (
              <p className="mt-[24px] font-[400] text-[15px] border-b border-gray-300 pb-[24px] text-[#617275]  ">
                {content.answer}
              </p>
            )}
          </>
        );
      })}
    </>
  );
}
