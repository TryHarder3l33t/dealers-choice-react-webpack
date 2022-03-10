import React from "react";

const UpdateForm = (props) => {
  const { value, onFormChange, handleFormSubmit, formId } = props;
  return (
    <form onSubmit={() => handleFormSubmit(formId)}>
      <label>Character:</label>
      <br />
      <input
        name="character"
        type="text"
        value={value}
        onChange={onFormChange}
      />
      <br />
      <label>Actor:</label>
      <br />
      <input name="actor" type="text" value={value} onChange={onFormChange} />
      <br />
      <label>Role:</label> <br />
      <input name="role" type="text" value={value} onChange={onFormChange} />
      <br />
      <label>Occupation:</label> <br />
      <input
        name="occupation"
        type="text"
        value={value}
        onChange={onFormChange}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UpdateForm;
