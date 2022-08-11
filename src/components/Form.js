import React from 'react';

function Form() {
  return (
    <div>
      <form className="form-body">
        <input type="text" name="autor" placeholder="Autor" />
        <input type="text" name="book" placeholder="Books" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
