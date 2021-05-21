
import { FcBusinessman  } from "react-icons/fc"
import { FcPortraitMode } from "react-icons/fc"
import {FcOrganization} from "react-icons/fc"
import {FcMoneyTransfer} from "react-icons/fc"
import {FcDatabase} from "react-icons/fc"
import {FcDeleteDatabase} from "react-icons/fc"
import {FcDataConfiguration} from "react-icons/fc"
import {FcAcceptDatabase} from "react-icons/fc"
import {FcApproval} from "react-icons/fc"
import {FcSettings} from "react-icons/fc"
import {FaEdit} from "react-icons/fa"

const mock = {
  tasks: [
    {
      id: 0,
      type: "Meeting",
      title: "Meeting with Andrew Piker",
      time: "9:00"
    },
    {
      id: 1,
      type: "Call",
      title: "Call with HT Company",
      time: "12:00"
    },
    {
      id: 2,
      type: "Meeting",
      title: "Meeting with Zoe Alison",
      time: "14:00"
    },
    {
      id: 3,
      type: "Interview",
      title: "Interview with HR",
      time: "15:00"
    }
  ],
  bigStat: [
    {
      
      icon: [<FcPortraitMode   color="primary"
                     style={{ fontSize: 60 }} 
                                 />
                      ] ,
      product: "Users",
      total: {
        monthly: 422,
        weekly: 15,
        daily: 19,
      percent: { value: 3.7, profit: false },
        },
      
      },
      {
      
        icon: [<FcBusinessman   color="success"
                       style={{ fontSize: 60 }} 
                                   />
                        ] ,
        product: "Services Providers",
        total: {
          monthly: 422,
          weekly: 15,
          daily: 19,
        percent: { value: 3.7, profit: false },
          },
        
        },
    {
      product: " Total Jobs ",
      icon: [<FcDatabase  color="primary"
      style={{ fontSize: 60 }}  />],
      type: "Meeting",
      total: {
        monthly: 754,
        weekly: 180,
        daily: 27,
        percent: { value: 2.5, profit: true }
      },
     
     
    },
    {
      product: "Completed Jobs",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true }
      },
      
      icon: [<FcAcceptDatabase   color="#2fe0a1"
      style={{ fontSize: 60 }} />],
    }
  ,
    {
      
      icon: [<FcOrganization
                     style={{ fontSize: 60 }} 
                                 />
                                
                      ] ,
      product: "Companies",
      total: {
        monthly: 422,
        weekly: 15,
        daily: 19,
      percent: { value: 3.7, profit: false },
        },
      
      },
      {
      
        icon: [<FcMoneyTransfer    color= "warning"
                       style={{ fontSize: 60 }} 
                                   />
                        ] ,
        product: "Total Earnings",
        total: {
          monthly: 422,
          weekly: 15,
          daily: 19,
        percent: { value: 3.7, profit: false },
          },
        
        },
    {
      product: "Concelled Jobs",
      icon: [<FcDeleteDatabase  color="secondary"
      style={{ fontSize: 60 }} />],
      type: "Meeting",
      total: {
        monthly: 754,
        weekly: 180,
        daily: 27,
        percent: { value: 2.5, profit: true }
      },
      color: "warning",
     
    },
    {
      product: "On Going Jobs",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true }
      },
    
      icon: [<FcDataConfiguration   color= "warning"
      style={{ fontSize: 60 }} />],
    }
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      variant:"rounded",
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation'
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company"
    },
    {
      id: 2,
      icon: "envelope",
      color: "danger",
      content: '4 <span className="fw-semi-bold">Private</span> Mails'
    },
    {
      id: 3,
      icon: "comment",
      color: "success",
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post'
    },
    {
      id: 4,
      icon: "cog",
      color: "light",
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app'
    },
    {
      id: 5,
      icon: "bell",
      color: "info",
      content:
        '15 <span className="fw-semi-bold">Notifications</span> from Social Apps'
    }
  ],
  table: [
    {
      id: 0,
      name: "M***********",
      email: "ottoto@wxample.com",
     Roles: "Super Admin",
     // price: "$25 224.2",
      //date: "11 May 2017",
     status:[<FaEdit
     style={{ fontSize: 40 }}  label={"Active"} />],
      action: [<FcApproval
        style={{ fontSize: 40 }}  label={"Active"} />],
    },
    {
      id: 1,
      name: "J********",
      email: "thornton@wxample.com",
      Roles: "Super Admin",
      //price: "$1 254.2",
      //date: "4 Jun 2017",
     status: [<FcSettings
      style={{ fontSize: 40 }}  label={"Active"} />],
     action: [<FcApproval
      style={{ fontSize: 40 }}  label={"Active"} />]
    },
    {
      id: 2,
      name: "A*********",
      email: "bird@wxample.com",
      Roles: "Buillding Admin",
      //price: "$1 570.0",
      //date: "27 Aug 2017",
      status: [<FcSettings
        style={{ fontSize: 40 }}  label={"Active"} />],
      action: [<FcApproval
        style={{ fontSize: 40 }}  label={"Active"} />],
    },
    {
      id: 3,
      name: "Jo********",
      email: "josephmay@wxample.com",
      Roles: "Buillding Admin",
     // price: "$5 224.5",
      //date: "19 Feb 2018",
      status:[<FcSettings
        style={{ fontSize: 40 }}  label={"Active"} />],
     action: [<FcApproval
      style={{ fontSize: 40 }}  label={"Active"} />],
    },
    //{
      //id: 4,
      //name: "Peter Horadnia",
     // email: "horadnia@wxample.com",
      //Roles: "Let's Dance",
      //price: "$43 594.7",
      //date: "1 Mar 2018",
      //status: [<FcApproval
        //style={{ fontSize: 40 }}  label={"Active"} />],
     //action: [<FcApproval
      //style={{ fontSize: 40 }}  label={"Active"} />],
    //}
  ]
};

export default mock;