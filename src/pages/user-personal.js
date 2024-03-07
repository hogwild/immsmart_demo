import React, {useState, useEffect} from "react"
import Link from "next/link"

import Select from "react-select"

import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Form,
  Card,
  Breadcrumb,
  Badge,
} from "react-bootstrap"

import data from "../data/user-personal.json"
import Icon from "../components/Icon"
import {
  faAddressBook,
  faBirthdayCake,
  faCat,
  faEnvelopeOpen,
  faIdCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import axios from "axios"
import Image from "@/components/CustomImage"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"


export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      // loggedUser: true,
      title: "Personal info - forms",
    },
  }
}

const UserPersonal = () => {
  const [accountInfo, setAccountInfo] = useState(null)
  const router = useRouter()
  const [personalCollapse, setPersonalCollapse] = React.useState(false)
  const [addressCollapse, setAddressCollapse] = React.useState(false)
  const [loginCollapse, setLoginCollapse] = React.useState(false)
  const [socialAccountsCollapse, setSocialAccountsCollapse] = React.useState(false)
  const {data:session, status} = useSession()
  const [oldPassword, setOldPassword] = useState(null)
  const [newPassword1, setNewPassword1] = useState(null)
  const [newPassword2, setNewPassword2] = useState(null)

  const [personalDetails, setPersonalDetails] = useState({
    first_name:"",
    last_name: "",
    age:"",
    phone:"",
    avatar:"",
    user_type:"",
  })

  const [addressDetails, setAddressDetails] = useState({
    country:"",
    zipcode:"",
    address:"",
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(status==="loading"){
          return "Loading or unauthenticated..."
        }
        const pk = session.user.pk
        const token = session.access_token
        const response = await axios({
          url: `https://www.immsmart.com/api/user/profile/${pk}/`, 
          method: "get",
          headers: {
                "Authorization": 'Bearer '+ token
            },
        })

        const info = { ...session.user, ...response.data, token:session.access_token }
        setAccountInfo(info)
      }catch(error){
        console.log('Error fetching data:', error)
      }  
    }
    fetchData()
  }, [status])

  const professions = [{label:"Consultant", value:"consultant"},  {label:"Client", value:"client"}, {label:"Administrator", value:"admin"}]
  

  if (status==="unauthenticated"){
    router.push('/')
    return "Unauthenticated..." //This statement is needed because router.push('/') is a callback, will run after the other function is called.
  }

  console.log(accountInfo)
  if(!accountInfo){
    return <>Loading</>
  }
 
  console.log(addressDetails)

  const personal = accountInfo.user_type==="consultant"?[
    { title:accountInfo.first_name+" "+accountInfo.last_name, icon:"id-card" }, 
    { title: accountInfo.user_type.charAt(0).toUpperCase()+accountInfo.user_type.slice(1), icon:"cat"},
    { title: accountInfo.rcic, icon:"canadian-maple-leaf"},
    { title:accountInfo.email, icon:"envelope-open"}, 
    { title: accountInfo.phone, icon:"phone"},
  ]:[
    { title:accountInfo.first_name+" "+accountInfo.last_name, icon:"id-card" }, 
    { title: accountInfo.user_type.toUpperCase(), icon:"cat"},
    { title:accountInfo.email, icon:"envelope-open"}, 
    { title: accountInfo.phone, icon:"phone"},
  ]

  const getProfessionIndex = (professions, user_type) => {
    
    for(let i=0;i<professions.length; i++){
      if(professions[i].value===user_type){
        return i
      }
    }
  }

  const handlePersonalDetailsChange = ({currentTarget: input}) => {
    let newData = { ...personalDetails}
    newData[input.name] = input.value
    setPersonalDetails(newData)
  }

  const handleSelectChange = ({value}) => {
    let newData = { ...personalDetails}
    if(value!==accountInfo.user_type){
        newData["user_type"] = value
        setPersonalDetails(newData)
        let newAccountInfo = {...accountInfo}
        newAccountInfo.user_type = value
        setAccountInfo(newAccountInfo)
    }
  }

  const handleImageChange = (e) => {
    let newData = { ...personalDetails }
    if(e.target.files[0]){
      newData["avatar"] = e.target.files[0]
      setPersonalDetails(newData)
    }
  }

  const handleAddressChange = ({currentTarget: input}) => {
    let newData = { ...addressDetails}
    newData[input.name] = input.value
    setAddressDetails(newData)
  }

  const update_personal_details = async(e) => {
    
    e.preventDefault()

    let formData = new FormData()
    for(const obj of Object.keys(personalDetails)){
      if (personalDetails[obj]){
        formData.append(obj, personalDetails[obj])
      }

    }

    const response = await axios({
      url: `http://127.0.0.1:8000/api/user/profile/${accountInfo.pk}/`, 
      method: "put",
      headers:{
            "Authorization": 'Bearer ' + accountInfo.token,
        },
      data: formData,
    }).then((data) => {
      // setAccountInfo(null)
      // setOldPassword(null)
      // setNewPassword1(null)
      // setNewPassword2(null)
        
          // setAccountInfo(null)
          // console.log(firstName)
          // signIn("credentials", { email:email, password:newPassword1, redirect:false })
        
      })
  }

  const change_address = async(e) => {

    e.preventDefault()
    const response = await axios({
      url: `http://127.0.0.1:8000/api/user/profile/${accountInfo.pk}/`, 
      method: "put",
      headers:{
            "Authorization": 'Bearer ' + accountInfo.token,
        },
      data: addressDetails,
    }).then((data) => {
      // setAccountInfo(null)
      // setOldPassword(null)
      // setNewPassword1(null)
      // setNewPassword2(null)
        
          // setAccountInfo(null)
          // console.log(firstName)
          // signIn("credentials", { email:email, password:newPassword1, redirect:false })
        
      })

  }

  const change_password = async (e) => {
    e.preventDefault()
    const response = await axios({
      url: `http://127.0.0.1:8000/api/user/password/change/`, 
      method: "post",
      headers:{
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + accountInfo.token,
        },
      data:{
        "email": accountInfo.email,
        "new_password1":newPassword1,
        "new_password2":newPassword2,
        "old_password":oldPassword,
      }
    }).then((data) => {
      // setAccountInfo(null)
      // setOldPassword(null)
      // setNewPassword1(null)
      // setNewPassword2(null)
        
          // setAccountInfo(null)
          console.log(newPassword1)
          signIn("credentials", { email:email, password:newPassword1, redirect:false })
        
      })
  }


  return (
    <section className="py-5">
      <Container>
        <Breadcrumb listProps={{ className: "ps-0 justify-content-start" }}>
          <Link href="/" passHref legacyBehavior>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Link>
          <Link href="/user-account" passHref legacyBehavior>
            <Breadcrumb.Item>Account</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item active>Personal info</Breadcrumb.Item>
        </Breadcrumb>  

        {accountInfo.avatar ? (
          <div className="avatar avatar-xxl p-2 mb-3">
            <div className="position-relative h-100 overflow-hidden rounded-circle">
              <Image
                src={accountInfo.avatar}
                alt={accountInfo.email}
                width={144}
                height={144}
                layout="fixed"
              /> 
            </div> 
          </div>  
        ) : (
          <>
            <h1 className="hero-heading mb-0">{accountInfo.first_name+ " " +accountInfo.last_name}</h1>
            <p className="text-muted mb-5">{data.subtitle}</p>
          </>
        )}
        <Row>
          <Col lg="7">
            <div className="text-block">
              <Row className="mb-3">
                <Col sm="9">
                  <h5>Personal details  <Badge
                    text="info"
                    bg="info-light"
                    className="ms-1 mt-n1"
                    as="button"
                    onClick={()=>console.log("pay")}
                    style={{"fontSize":"small"}}
                  >
                   Be a Prime member
                  </Badge></h5>
                 
                  {/* <Button>Become a prime member</Button> */}
                </Col>
                <Col sm="3" className="text-end">
                  <Button
                    variant="link"
                    className="ps-0 collapsed"
                    onClick={() => setPersonalCollapse(!personalCollapse)}
                  >
                    Update
                  </Button>
                </Col>
              </Row>
              <p className="text-sm text-muted">
                {personal.map((item, index) => {
                  let userIcon
                  switch (item.icon) {
                    case "cat":
                      userIcon = faCat
                      break
                    case "envelope-open":
                      userIcon = faEnvelopeOpen
                      break
                    case "phone":
                      userIcon = faPhone
                      break
                    case "canadian-maple-leaf":
                      userIcon = faCanadianMapleLeaf
                      break

                    default:
                      userIcon = faIdCard
                  }
                  return (
                    <React.Fragment key={index}>
                      <FontAwesomeIcon icon={userIcon} className="me-2 fa-fw" />
                      {item.title}
                      { index<data.personal.length - 2 && (
                        <span className="mx-2"> | </span>
                      )}
                      {index > data.personal.length - 3 && <br />}
                    </React.Fragment>
                  )
                })}
              </p>
              <Collapse in={personalCollapse}>
                <Form onSubmit={update_personal_details}>
                  <Row className="pt-4">
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="name">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        id="first_name"
                        defaultValue={accountInfo.first_name?accountInfo.first_name:""}
                        onChange={(e)=>{
                          handlePersonalDetailsChange(e);
                        }}
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="date">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        id="last_name"
                        defaultValue={accountInfo.last_name?accountInfo.last_name:""}
                        onChange={(e)=>{
                          handlePersonalDetailsChange(e);
                        }}
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="age">Age</Form.Label>
                      <Form.Control
                        type="text"
                        name="age"
                        id="age"
                        defaultValue={accountInfo.age?accountInfo.age:""}
                        onChange={(e)=>{
                          handlePersonalDetailsChange(e);
                        }}
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="phone">Phone number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        id="phone"
                        defaultValue={accountInfo.phone?accountInfo.phone:""}
                        onChange={(e)=>{
                          handlePersonalDetailsChange(e);
                        }}
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="profession">Your Profession</Form.Label>
                      <Select
                        id="profession"
                        instanceId="profession"
                        name="profession"
                        options={professions}
                        defaultValue={professions[getProfessionIndex(professions, accountInfo.user_type)]}
                        className="selectpicker z-index-20"
                        classNamePrefix="selectpicker"
                        onChange={(e)=>{
                          handleSelectChange(e)
                        }}
                      />
                    </Col>
                    {accountInfo.user_type==="consultant"?
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="rcic">RCIC number</Form.Label>
                      <Form.Control
                        type="text"
                        name="rcic"
                        id="rcic"
                        defaultValue={accountInfo.rcic?accountInfo.rcic:""}
                        onChange={(e)=>{
                          handlePersonalDetailsChange(e);
                        }}
                      />
                    </Col>:<></>}

                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="photo">Your Photo</Form.Label>
                      <Form.Control
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/jpeg, image/png, image/gif"
                        onChange={(e)=>{
                          handleImageChange(e);
                        }}
                      />
                    </Col>

                  </Row>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className=" mb-4"
                  >
                    Save your personal details
                  </Button>
                </Form>
              </Collapse>
            </div>
            <div className="text-block">
              <Row className="mb-3">
                <Col sm="9">
                  <h5>Address</h5>
                </Col>
                <Col sm="3" className="text-end">
                  <Button
                    variant="link"
                    className="ps-0 text-primary collapsed"
                    onClick={() => setAddressCollapse(!addressCollapse)}
                  >
                    Change
                  </Button>
                </Col>
              </Row>
              <div className="d-flex text-sm text-muted">
                <FontAwesomeIcon icon={faAddressBook} className="fa-fw me-2" />
                <div className="mt-n1">
                  {accountInfo.address?accountInfo.address:"Unknown"}
                  <br />
                  {accountInfo.country?accountInfo.country:"Mars"}
                </div>
              </div>
              <Collapse in={addressCollapse}>
                <Form onSubmit={change_address}>
                  <Row className="pt-4">

                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="country">Country</Form.Label>
                        <Form.Control
                          type="text"
                          name="country"
                          id="country"
                          defaultValue={accountInfo.country}
                          onChange={(e)=>handleAddressChange(e)}
                        />
                    </Col>
                    
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="zipcode">Zip</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        defaultValue={accountInfo.zipcode}
                        onChange={(e)=>handleAddressChange(e)}
                      />
                    </Col>
                  
                    
                    <Col md="12" className="mb-4">
                      <Form.Label htmlFor="address">Street & City</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={accountInfo.address}
                        onChange={(e)=>handleAddressChange(e)}
                      />
                    </Col>
                    
                  </Row>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className=" mb-4"
                  >
                    Save address
                  </Button>
                </Form>
              </Collapse>
            </div>
            <div className="text-block">
              <Row className="mb-3">
                <Col sm="12">
                  <h5>Login & security</h5>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm="9">
                  <h6>Password</h6>
                </Col>
                <Col sm="3" className="text-end">
                  <Button
                    variant="link"
                    className="ps-0 text-primary collapsed"
                    onClick={() => setLoginCollapse(!loginCollapse)}
                  >
                    Update
                  </Button>
                </Col>
                <div className="d-flex text-sm text-muted">
                  <p className="text-sm text-muted">Last updated 3 years ago</p>
                </div>
              </Row>
              
              <Collapse in={loginCollapse}>
                <Form onSubmit={change_password}>
                  <Row className="mt-4">
                    <Col xs="12" className="mb-4">
                      <Form.Label htmlFor="password-current">
                        Current Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password-current"
                        id="password-current"
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="password-new">
                        New Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password-new"
                        id="password-new"
                        onChange={(e) => setNewPassword1(e.target.value)}
                      />
                    </Col>
                    <Col md="6" className="mb-4">
                      <Form.Label htmlFor="password-confirm">
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password-confirm"
                        id="password-confirm"
                        onChange={(e) => setNewPassword2(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Button type="submit" variant="outline-primary" className="mb-4">
                    Update Password
                  </Button>
                </Form>
              </Collapse>
              <Row className="mb-3">
                <Col sm="9">
                  <h6>Social accounts</h6>
                </Col>
                <Col sm="3" className="text-end">
                  <Button
                    variant="link"
                    className="ps-0 text-primary collapsed"
                    onClick={() => setSocialAccountsCollapse(!socialAccountsCollapse)}
                  >
                    Change
                  </Button>
                </Col>
                <div className="d-flex text-sm text-muted">
                  <p className="text-sm text-muted">Last updated 3 years ago</p>
                </div>
              </Row>
              <Collapse in={socialAccountsCollapse}>
              <Form>
              <Row>
                <Col sm="8">
                  <h6>Facebook</h6>
                  <p className="text-sm text-muted">Not connected</p>
                </Col>
                <Col className="text-end">
                  <Button variant="link" className="ps-0 text-primary">
                    Connect
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm="8">
                  <h6>Google</h6>
                  <p className="text-sm text-muted">Connected</p>
                </Col>
                <Col className="text-end">
                  <Button variant="link" className="ps-0 text-primary">
                    Disconnect
                  </Button>
                </Col>
              </Row>
              </Form>
              </Collapse>
            </div>
          </Col>
          <Col md="6" lg="4" className="ms-lg-auto">
            <Card className="border-0 shadow">
              <Card.Header className="bg-primary-light py-4 border-0">
                <div className="d-flex align-items-center">
                  <div>
                    <h4 className="h6 subtitle text-sm text-primary">
                      What info is shared with others?
                    </h4>
                  </div>
                  <Icon
                    icon="identity-1"
                    className="svg-icon-light w-3rem h-3rem ms-3 text-primary flex-shrink-0"
                  />
                </div>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="text-muted text-sm card-text">
                  Directory only releases contact information for hosts and
                  guests <strong>after a reservation is confirmed</strong>.
                </p>
                <p className="text-muted text-sm card-text">
                  Amet nisi eiusmod minim commodo sit voluptate aute ut quis ea
                  veniam sunt proident ex.{" "}
                  <strong>Exercitation culpa laboris</strong> consequat fugiat
                  non ipsum veniam Lorem aliqua deserunt tempor elit veniam.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default UserPersonal
