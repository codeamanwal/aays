import React from "react";
import FormCard from "../components/FormCard";

const Overview = () => {
  const forms = [
    { title: "Form 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...", owner: "Liana Fletcher" },
    { title: "Form 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...", owner: "Adrian Moss" },
    { title: "Form 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...", owner: "Clara Whitaker" },
    { title: "Form 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...", owner: "Ethan Caldwell" },
    { title: "Form 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...", owner: "Simone Landry" },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-6 bg-gray-100">
      {forms.map((form, index) => (
        <FormCard
          key={index}
          title={form.title}
          description={form.description}
          owner={form.owner}
        />
      ))}
    </div>
  );
};

export default Overview;
