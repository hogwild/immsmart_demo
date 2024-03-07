import React from "react"
import { Dropdown, NavLink, NavItem } from "react-bootstrap"
import ActiveLink from "./../ActiveLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
// import userMenu from "../../data/user-menu.json"
import Avatar from "../Avatar"
import { signOut } from "next-auth/react"


export default function UserMenu({ onLinkClick, loggedUser }) {
  const userMenu = {
    "img":loggedUser.avatar,
    "type":loggedUser.avatar?"avatar":"",
    "title": loggedUser.email,
    "dropdown": [
      {
        "title": "Messages",
        "link": "/user-messages"
      },
      {
        "title": "My Account",
        "link": "/user-account"
      },
      {
        "divider": true
      },
      {
        "title": "Sign out",
        "link": "#", //"/",
        "signout": true
      }
    ]
  }

  return (
    <Dropdown
      as={NavItem}
      className={userMenu.type === "avatar" ? "ms-lg-3" : ""}
    >
      <Dropdown.Toggle
        as={NavLink}
        style={userMenu.type === "avatar" ? { padding: 0 }:{ padding:0 }}
        className="dropdown-avatar"
      >
        {userMenu.type === "avatar" ? (
          <Avatar
            image={userMenu.img}
            alt={userMenu.title}
            className="me-2 avatar-border-white"
            size="sm"
            cover
          />
        ) : (
           userMenu.title
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        {userMenu.dropdown &&
          userMenu.dropdown.map((dropdownItem, index) =>
            !dropdownItem.divider ? (
              <ActiveLink
                key={index}
                activeClassName="active"
                href={dropdownItem.link}
                passHref
              >
                <Dropdown.Item onClick={() => dropdownItem.signout?signOut():onLinkClick(userMenu.title)}>
                  {dropdownItem.signout && (
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="me-2 text-muted"
                    />
                  )}
                  {dropdownItem.title}
                </Dropdown.Item>
              </ActiveLink>
            ) : (
              <Dropdown.Divider key={index} />
            )
          )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

//The following code is for loading session then loading data
// const {data:session, status} = useSession({
  //   required:true,
  //   onUnauthenticated(){
  //     redirect('/login')
  //   }
  // })
  // const [data_all, setData] = useState(null)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if(status==="loading"){
  //         return 
  //       }
  //       const pk = session.user.pk
  //       const token = session.access_token
  //       const response = await axios({
  //         url: `http://127.0.0.1:8000/api/users/${pk}/`,
  //         method: "get",
  //         headers: {
  //               "Authorization": 'Bearer '+ token
  //           },
  //       })
  //       setData(response.data)
  //     }catch(error){
  //       console.log('Error fetching data:', error)
  //     }  
  //   }
  //   fetchData()
  // }, [session, status])
  // if(!data_all){
  //   return <></>
  // } 
  // console.log(data_all)