import React, { useState } from "react";
import FormHeader from "./FormHeader";
import Question from "./Question";
import SidebarToolbar from "./SidebarToolbar";

const FormPage = () => {
  const [title, setTitle] = useState("Form Title");
  const [description, setDescription] = useState("Form Description");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        text: "",
        type: "single-choice",
        options: [{ text: "Option 1", image: "" }],
      },
    ]);
  };

  const updateQuestionText = (id, text) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, text } : q)));
  };

  const updateQuestionType = (id, type) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              type,
              options: type === "text" ? [] : [{ text: "Option 1", image: "" }],
            }
          : q
      )
    );
  };

  const updateOption = (questionId, optionIndex, value) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt, idx) =>
                idx === optionIndex ? value : opt
              ),
            }
          : q
      )
    );
  };

  const addOption = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              options: [
                ...q.options,
                { text: `Option ${q.options.length + 1}`, image: "" },
              ],
            }
          : q
      )
    );
  };

  const removeOption = (questionId, optionIndex) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? { ...q, options: q.options.filter((_, idx) => idx !== optionIndex) }
          : q
      )
    );
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const duplicateQuestion = (id) => {
    const questionToDuplicate = questions.find((q) => q.id === id);
    if (questionToDuplicate) {
      const duplicatedQuestion = {
        ...questionToDuplicate,
        id: Date.now(), // Assign a new unique ID
        options: questionToDuplicate.options.map((opt) => ({ ...opt })), // Deep copy options
      };
      const index = questions.findIndex((q) => q.id === id);
      const newQuestions = [...questions];
      newQuestions.splice(index + 1, 0, duplicatedQuestion); // Insert duplicate below the original
      setQuestions(newQuestions);
    }
  };

  const doneEditingQuestion = (id) => {
    // Implement any desired action when the "Done" button is clicked
    console.log(`Question with ID ${id} is done editing`);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 p-4 relative">
      <SidebarToolbar
        onAddQuestion={addQuestion}
        onAddTitle={() => {}}
        onAddSection={() => {}}
        onAddImage={() => {}}
        onAddVideo={() => {}}
      />
      <div className="w-full max-w-2xl">
        <FormHeader
          title={title}
          description={description}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
        />

        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            onQuestionTextChange={updateQuestionText}
            onQuestionTypeChange={updateQuestionType}
            onOptionChange={updateOption}
            onAddOption={addOption}
            onRemoveOption={removeOption}
            onDeleteQuestion={deleteQuestion}
            onDuplicateQuestion={duplicateQuestion}
            onDoneEditing={doneEditingQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
