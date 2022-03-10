import React from "react";

const TheForm = (props) => {
  const { value, onChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>Character:</label>
      <br />
      <input name="character" type="text" value={value} onChange={onChange} />
      <br />
      <label>Actor:</label>
      <br />
      <input name="actor" type="text" value={value} onChange={onChange} />
      <br />
      <label>Role:</label> <br />
      <input name="role" type="text" value={value} onChange={onChange} />
      <br />
      <label>Occupation:</label> <br />
      <input name="occupation" type="text" value={value} onChange={onChange} />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TheForm;
