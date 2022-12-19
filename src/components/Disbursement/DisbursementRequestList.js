import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { visuallyHidden } from "@mui/utils";
import { MoreVert, Preview } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

function createData(reqno, branch, appno, name, status, user, date) {
  return { reqno, branch, appno, name, status, user, date };
}

const rows = [
  createData(
    "DR-DEC2022-00001",
    "Mylapore",
    "STLAP-MLY-2022-009",
    "Customer_Name_001",
    "Requested",
    "CPC_User_10",
    "Dec 04 2022 16:10:35"
  ),
  createData(
    "DR-DEC2022-00401",
    "BroadWay",
    "STLAP-BRWY-2022-029",
    "Customer_Name_01291",
    "Paid",
    "CPC_User_40",
    "Dec 04 2022 14:10:22"
  ),
  createData(
    "DR-DEC2022-00091",
    "Adayar",
    "STLAP-ADY-2022-00904",
    "Customer_Name_01235",
    "Modified",
    "CPC_User_20",
    "Dec 06 2022 10:10:58"
  ),
  createData(
    "DR-DEC2022-01001",
    "Tambaram",
    "STLAP-TBM-2022-00412",
    "Customer_Name_01987",
    "Cancelled",
    "CPC_User_09",
    "Dec 09 2022 12:10:48"
  ),
  createData(
    "DR-DEC2022-00561",
    "Thiruporur",
    "STLAP-THPR-2022-010",
    "Customer_Name_01546",
    "Requested",
    "CPC_User_16",
    "Dec 10 2022 10:10:29"
  ),
  createData(
    "DR-DEC2022-00901",
    "Villupuram",
    "STLAP-VM-2022-00910",
    "Customer_Name_00345",
    "Requested",
    "CPC_User_19",
    "Dec 04 2022 16:10:09"
  ),
  createData(
    "DR-DEC2022-00101",
    "Chengalpattu",
    "STLAP-CGL-2022-00409",
    "Customer_Name_00965",
    "Modified",
    "CPC_User_23",
    "Dec 09 2022 15:10:20"
  ),
  createData(
    "DR-DEC2022-00451",
    "Tiruchirupalli",
    "STLAP-TPU-2022-00410",
    "Customer_Name_00234",
    "Requested",
    "CPC_User_10",
    "Dec 12 2022 17:10:19"
  ),
  createData(
    "DR-DEC2022-001261",
    "Madurai",
    "STLAP-MDU-2022-00912",
    "Customer_Name_02348",
    "Cancelled",
    "CPC_User_20",
    "Dec 14 2022 16:10:23"
  ),
  createData(
    "DR-DEC2022-001345",
    "Dindigul",
    "STLAP-DGL-2022-00409",
    "Customer_Name_00652",
    "Paid",
    "CPC_User_30",
    "Dec 14 2022 12:10:29"
  ),
  createData(
    "DR-DEC2022-001659",
    "Ramanathapuram",
    "STLAP-RMN-2022-049",
    "Customer_Name_00789",
    "Requested",
    "CPC_User_09",
    "Dec 15 2022 16:10:45"
  ),
  createData(
    "DR-DEC2022-000931",
    "Tirunelveli",
    "STLAP-MLY-TEN-0129",
    "Customer_Name_00469",
    "Modified",
    "CPC_User_10",
    "Dec 10 2022 16:10:38"
  ),
  createData(
    "DR-DEC2022-000430",
    "Karaikuddi",
    "STLAP-MLY-KDU-049",
    "Customer_Name_00910",
    "Requested",
    "CPC_User_04",
    "Dec 06 2022 11:10:25"
  ),
  createData(
    "DR-DEC2022-000129",
    "Siva Gangai",
    "STLAP-SVG-2022-0124",
    "Customer_Name_00412",
    "Cancelled",
    "CPC_User_12",
    "Dec 04 2022 10:10:55"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "RequestNumber",
    numeric: false,
    disablePadding: true,
    label: "Request Number",
  },
  {
    id: "DisbursementBranch",
    numeric: false,
    disablePadding: false,
    label: "Disbursement Branch",
  },
  {
    id: "ApplicationNumber",
    numeric: false,
    disablePadding: false,
    label: "Application Number",
  },
  {
    id: "CustomerName",
    numeric: false,
    disablePadding: false,
    label: "Customer Name",
  },
  {
    id: "Status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "Created_Modified_User",
    numeric: false,
    disablePadding: false,
    label: "Created/ Modified User",
  },
  {
    id: "Created_Modified_Date",
    numeric: false,
    disablePadding: false,
    label: "Created/ Modified Date",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            align={"left"}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: "#AAAAAA" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Disbursement Information
        </Typography>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function DisbursementRequestList() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("RequestNumber");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const req_mod_options = ["View", "Modify", "Cancel"];

  const ITEM_HEIGHT = 48;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    console.log(name);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: window.innerWidth - 16 }}>
      <Paper sx={{ width: window.innerWidth - 16, mb: 1 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ width: window.innerWidth - 16 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.reqno)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.reqno}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                      >
                        {row.reqno}
                      </TableCell>
                      <TableCell align="left">{row.branch}</TableCell>
                      <TableCell align="left">{row.appno}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.user}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      {row.status === "Paid" || row.status === "Cancelled" ? (
                        <TableCell>
                          <Tooltip title="View">
                            <IconButton>
                              <Preview />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      ) : (
                        <TableCell>
                          <div>
                            <Tooltip title="More Actions">
                              <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? "long-menu" : undefined}
                                aria-expanded={open ? "true" : undefined}
                                aria-haspopup="true"
                                onClick={handleMenuClick}
                              >
                                <MoreVert />
                              </IconButton>
                            </Tooltip>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "100px",
                                },
                              }}
                            >
                              {req_mod_options.map((option) => (
                                <MenuItem
                                  key={option}
                                  selected={option === "Pyxis"}
                                  onClick={handleClose}
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </Menu>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
