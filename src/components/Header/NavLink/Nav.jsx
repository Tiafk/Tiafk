function Nav({nav}) {
  return (
    <li>
      <a href={nav.link}>{nav.text}</a>
      <span></span>
    </li>
  )
}

export default Nav;