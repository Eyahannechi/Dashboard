import React, { useState } from 'react'
import MSform from "./MSform";
import PageTitle from "../../components/PageTitle";
//import PageHeader from "../../components/PageHeader";
//mport PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
//import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import { Paper, makeStyles, Grid ,TextField, fade , Toolbar, IconButton} from '@material-ui/core';
import useTable from "../../components/useTable";
import * as msService from "../../Services/msService";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup";
//import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
//import CloseIcon from '@material-ui/icons/Close';
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";
//import mock from "./mock";
//import Widget from "../../components/Widget";
import BigStat from "./components/BigStat/BigStat";
import classnames from "classnames";
import mock  from "./mock";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "./Wrappers";
import { FaRegEdit  } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineGold } from "react-icons/ai";
//import  CheckBox from "./allcheck";
import Selectall from "./Selectall"
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(2)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    },
    checkbox: {
      position: 'absolute',
      right: '190px'

    },
    text: {
      size:"100px",
      
    },
    searchContainer: {
        display: "flex",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "5px",
        marginBottom: "5px",
      },
      searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
      },
      searchInput: {
        width: "100%",
        //margin: "75%",
      },
 
    }))


    const headCells = [
        { id: 'fullName', label: 'Admin Name' },
        { id: 'email', label: 'Email Address ' },
        { id: 'mobile', label: 'Mobile Number' },
        { id: 'department', label: 'Department' },
        { id: 'actions', label: 'Actions', disableSorting: true }
    ]


    export default function MS() {
    
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(msService.getAllMS())
    //const [filterFn, setFilterFn] = useState({ fn: text => { return text; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
   const [filter, setFilter] = useState("");
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
     } = useTable(records, headCells);
     //filterFn
   {/*const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: text => {
                if (target.value == "")
                    return text;
                else
                    return text.filter(text => text.mock.bigStat.includes(target.value))
            }
        })
    }*/}

    const addOrEdit = (ms, resetForm) => {
        if (ms.id == 0)
        msService.insertMS(ms)
        else
        msService.updateMS(ms)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(msService.getAllMS())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }
   {/* const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        msService.deleteMS(id);
        setRecords(msService.getAllMS())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }*/}       
    const handleSearchChange = (e) => {
        setFilter(e.target.value);
      };
      
     return (
        <>
            <PageTitle
                title="Service Category"
               
            />
              
  
              <Paper className={classes.pageContent}>
            
                <Toolbar>
             <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Search"
              variant="standard"
             />
    </div> 
              {/* <Controls.Input
                        label="Search "
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />*/}
                    
                    
                 {/*   &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<input type="checkbox"
                      
                      />  <h4 size="100px"> 
                       Select All
                     </h4>
                 */}
                     
              
                      
                     
        <div className={classes.checkbox}>
        <Selectall/>
        <div className={classes.text}>
       Select All
       </div>
                </div>
                
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                </Paper>
                   
              <Paper className={classes.pageContent}>
                   <Grid container spacing={4}>
                {mock.bigStat.map( stat=> (
          <Grid item md={4} sm={6} xs={12}>
      <BigStat  {...stat}
      options={{
        filterType: "checkbox",
      }}/>
    
     {/* <Widget
    >
      
      <div className={classes.totalValueContainer}>
      <div className={classes.totalValue}>
        
        <Grid container alignItems="center">
   
       &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
     {icon}
         </Grid>
        </div>
        <Grid container alignItems="center">
        {text}
         </Grid>
   
      </div>

      <div className={classes.bottomStatsContainer}>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
          <IconButton>
           <FaRegEdit
        style={{ fontSize: 30 }} />
           </IconButton>
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary">
          &nbsp;&nbsp; Edit
          </Typography>
        </div>
        <div className={classes.statCell}>
          <Grid container alignItems="center">
          <IconButton>
          < RiDeleteBin5Line
        style={{ fontSize:30 }} />
        </IconButton>
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary">
          &nbsp;&nbsp; Delete
          </Typography>
        </div>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
          <IconButton>
           &nbsp;&nbsp; <AiOutlineGold 
        style={{ fontSize:32 }} />
           </IconButton>
          </Grid>
          <Typography size="sm" color="text" colorBrightness="secondary">
            View Subcategory
          </Typography>
        </div>
      </div>
    </Widget> */}

          </Grid>  
        ))}
             </Grid>
             </Paper>
            <Popup
                title=" Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <MSform
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}

