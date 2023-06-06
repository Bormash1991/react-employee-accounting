import "./add-form.scss";
const AddForm = () => {
  return (
    <div className="add-form">
      <h3 className="add-form__title">Додайте нового співробітника</h3>
      <form className="add-form__form">
        <input type="text" placeholder="Ім'я" className="add-form__input" />
        <input type="text" placeholder="З/П в $" className="add-form__input" />
        <button className="add-form__btn">Додати</button>
      </form>
    </div>
  );
};
export default AddForm;
