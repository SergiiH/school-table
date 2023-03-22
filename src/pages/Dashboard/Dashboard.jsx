import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/Layout";
import {
  addRateAction,
  getAllLessonsAction,
  getAllUserAction,
  getRateAction,
  removeRateAction,
} from "../../redux/action";
import {
  lessonsListSelector,
  rateLoadingSelector,
  rateSelector,
  userLoadingSelector,
  usersListSelector,
} from "../../redux/selectors";

import "./Dashboard.css";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserAction());
    dispatch(getAllLessonsAction());
    dispatch(getRateAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [schoolBoyList, setSchoolBoyList] = useState([
    {
      Id: 1,
      FirstName: "FirstName",
      LastName: "LastName",
      SecondName: "SecondName",
    },
  ]);

  const [lessonsList, setLessonsList] = useState([
    {
      Id: 1,
      Title: "1/2",
    },
  ]);
  const allUsers = useSelector(usersListSelector);
  const userLoading = useSelector(userLoadingSelector);
  const allLessons = useSelector(lessonsListSelector);

  useEffect(() => {
    setLessonsList(allLessons);
  }, [allLessons]);

  useEffect(() => {
    setSchoolBoyList(allUsers);
  }, [allUsers]);

  const dataRate = useSelector(rateSelector);
  const rateLoading = useSelector(rateLoadingSelector);
  const [rateList, setRateList] = useState([]);

  useEffect(() => {
    setRateList(dataRate);
  }, [dataRate]);

  const isLoading = userLoading || rateLoading;

  if (isLoading) {
    return <CircularProgress />;
  }

  const handleClick = (item, Id) => (e) => {
    if (e.target.textContent.length) {
      return dispatch(removeRateAction({ SchoolboyId: Id, ColumnId: item.Id }));
    }
    dispatch(addRateAction({ SchoolboyId: Id, ColumnId: item.Id, Title: "H" }));
  };

  const renderFunc = (Id, lesson) => {
    const isRate = rateList?.find(
      (item) => item.SchoolboyId === Id && item.ColumnId === lesson.Id
    );

    return isRate ? isRate.Title : "";
  };
  return (
    <Layout>
      <Paper sx={{ width: "100%", overflow: "hidden", height: "94vh" }}>
        <TableContainer sx={{ maxHeight: "94vh" }}>
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell className="header">№</TableCell>
                <TableCell className="header">Ученик</TableCell>
                {lessonsList?.map(({ Id, Title }) => (
                  <TableCell className="header" key={Id}>
                    {Title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {schoolBoyList?.map(
                ({ LastName, SecondName, FirstName, Id }, index) => (
                  <TableRow
                    key={Id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {`${LastName || ""} ${FirstName || ""} ${
                        SecondName || ""
                      }`}
                    </TableCell>
                    {lessonsList?.map((item, index) => (
                      <TableCell
                        component="th"
                        scope="row"
                        key={index}
                        onClick={handleClick(item, Id)}
                        className="day"
                      >
                        {renderFunc(Id, item)}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Layout>
  );
};

export default Dashboard;
