import React, { useEffect, useState } from "react"
import Link from "next/link"
import Router from "next/router"
import { Navbar, Nav, Container, Button } from "react-bootstrap"

import ActiveLink from "./../ActiveLink"

import menu from "../../data/menu.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import SearchForm from "./SearchForm"
import UserMenu from "./UserMenu"
import DropdownMenuItem from "./DropdownMenuItem"
import UseWindowSize from "../../hooks/UseWindowSize"


const Header = (props) => {
  const [parentName, setParentName] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const size = UseWindowSize()
  const onLinkClick = (parent) => {
    size.width < 991 && setCollapsed(!collapsed)
    setParentName(parent)
  }
  // console.log(props)
  // highlight not only active dropdown item, but also its parent, i.e. dropdown toggle
  const highlightDropdownParent = () => {
    menu.map((item) => {
      item.dropdown &&
        item.dropdown.map((dropdownLink) => {
          dropdownLink.link &&
            dropdownLink.link === Router.route &&
            setParentName(item.title)
          dropdownLink.links &&
            dropdownLink.links.map(
              (link) => link.link === Router.route && setParentName(item.title)
            )
        })
      item.megamenu &&
        item.megamenu.map((megamenuColumn) =>
          megamenuColumn.map((megamenuBlock) =>
            megamenuBlock.links.map((dropdownLink) => {
              if (dropdownLink.link === Router.route) {
                dropdownLink.parent
                  ? setParentName(dropdownLink.parent)
                  : setParentName(item.title)
              }
            })
          )
        )
      item.link === Router.route && setParentName(item.title)
    })
  }

  useEffect(highlightDropdownParent, [])
  return (
    <header
      className={`header ${props.headerClasses ? props.headerClasses : ""}`}
    >
      <Navbar
        variant={props.nav.light ? "light" : "dark"}
        bg={props.nav.color ? props.nav.color : "white"}
        fixed={props.nav.fixed ? props.nav.fixed : "top"}
        expand="lg"
        expanded={collapsed}
        className={props.nav.classes ? props.nav.classes : ""}
      >
        <Container fluid>
          <div className="d-flex align-items-center">
            {/* NAVBAR BRAND */}
            <Link href="/" passHref legacyBehavior>
              <Navbar.Brand className="py-1">
                <img
                  src="/content/img/immsmart_logo_24.png"
                  width="138"
                  height="31"
                  alt="Directory logo"
                />
              </Navbar.Brand>
            </Link>
            {/* END NAVBAR BRAND */}
            {/* SEARCH FORM */}
            <SearchForm
              id="search"
              className="d-none d-sm-flex"
              childClassname="input-expand ms-lg-2 ms-xl-3"
            />
            {/* END SEARCH FORM */}
          </div>

          {/* NAVBAR TOGGLE */}
          <Navbar.Toggle
            aria-controls="navbar-main-menu"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          {/* END NAVBAR TOGGLE */}
          <Navbar.Collapse id="navbar-main-menu">
            {/* MOBILE SEARCH FORM */}
            <SearchForm
              id="searchcollapsed"
              className="mt-4 mb-2 d-sm-none"
              childClassname="w-100"
            />
            {/* END MOBILE SEARCH FORM */}

            {/* MENU */}
            <Nav className="ms-auto align-items-lg-center">
              {menu &&
                menu.map((item) =>
                  item.dropdown || item.megamenu ? (
                    // show entire menu to unlogged user or hide items that have hideToLoggedUser set to true
                    !props.loggedUser ||
                    (props.loggedUser && !item.hideToLoggedUser) ? (
                      // DROPDOWN ITEM
                      <DropdownMenuItem
                        onLinkClick={onLinkClick}
                        item={item}
                        key={item.title}
                        parentName={parentName}
                      />
                    ) : (
                      ""
                    )
                  ) : (props.loggedUser && !item.hideToLoggedUser) ||
                    !props.loggedUser ? (
                    // NAV ITEM
                    <Nav.Item
                      key={item.title}
                      className={
                        item.button
                          ? "mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block"
                          : ""
                      }
                    >
                      {item.button ? (
                        item.showToLoggedUser !== false && (
                          <ActiveLink activeClassName="active" href={item.link}>
                            <Button onClick={() => onLinkClick(item.title)}>
                              {item.title}
                            </Button>
                          </ActiveLink>
                        )
                      ) : (
                        <ActiveLink
                          activeClassName="active"
                          href={item.link}
                          passHref
                        >
                          <Nav.Link onClick={() => onLinkClick(item.title)}>
                          {/* <Nav.Link onClick={() => signIn(undefined, {callbackUrl:"/"})}> */}
                            {item.title}
                          </Nav.Link>
                        </ActiveLink>
                      )}
                    </Nav.Item>
                  ) : (
                    ""
                  )
                )}
              {/* USER MENU */}
              {props.loggedUser && <UserMenu onLinkClick={onLinkClick} loggedUser={props.loggedUser}/>}
              {/* USER MENU */}
            </Nav>
            {/* END MENU */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header
