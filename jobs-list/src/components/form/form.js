import React from "react";

const Form = (props) => (
  <form onSubmit={props.jobsMethod}>
    <input type="text" name="city" placeholder="Город" />
    <input type="text" name="search_field" placeholder="Ключевые слова" />
    <p>Опыт работы:</p>
    <p>
      <select size="1" name="experience">
        <option disabled>Выберите опыт работы</option>
        <option value="Не имеет значения">Не имеет значения</option>
        <option value="Нет опыта">Нет опыта</option>
        <option value="От 1 года до 3 лет">От 1 года до 3 лет</option>
        <option value="От 3 до 6 лет">От 3 до 6 лет</option>
        <option value="Более 6 лет">Более 6 лет</option>
      </select>
    </p>
    <button>Получить список вакансий</button>
  </form>
);

export default Form;
