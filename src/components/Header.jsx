

function Header({ title }) {             //создаю функцию header, которая будет принимать в себя значения props {title}
  return (          //в итоге возращается header в котором h1 заголовок, но пустой, все что напишу в app.jsx в title будет меняться тут, в header.
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;         //как всегда обязательно чтобы мог в дальнейшем ипортировать.