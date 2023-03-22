import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/Layout";
import { getAllLessonsAction, getAllUserAction } from "../../redux/action";
import {
  lessonsListSelector,
  userLoadingSelector,
  usersQuantitySelector,
} from "../../redux/selectors";

const SecondPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserAction());
    dispatch(getAllLessonsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [usersQuantity, setUsersQuantity] = useState(1);
  const [lessonsList, setLessonsList] = useState([{ Id: 1, Title: "1/2" }]);
  const quantity = useSelector(usersQuantitySelector);
  const userLoading = useSelector(userLoadingSelector);
  const allLessons = useSelector(lessonsListSelector);

  useEffect(() => {
    setUsersQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    setLessonsList(allLessons);
  }, [allLessons]);

  const largestTitleFunc = () => {
    if (lessonsList) {
      const list = JSON.parse(JSON.stringify(lessonsList));
      const newList = list.map((item) => {
        const [first, second] = item.Title.split("/");
        const sum = Number(first) + Number(second);
        item.Title = sum;
        return item;
      });
      newList.sort((a, b) => {
        if (a.Title > b.Title) {
          return -1;
        }
        return 1;
      });
      const result = lessonsList.find((item) => item.Id === newList[0].Id);
      return `${JSON.stringify(result)} === ${newList[0].Title}`;
    }
  };

  if (userLoading) {
    return <CircularProgress />;
  }

  return (
    <Layout>
      <Typography variant="h6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        tenetur est aliquam unde quaerat quo esse, ullam vel exercitationem
        deleniti quos voluptatem, quia dolor. Rerum quos sed praesentium beatae
        necessitatibus!
      </Typography>

      <Typography variant="h5">Quantity: {usersQuantity}</Typography>
      <Typography variant="h5">Largest Title: {largestTitleFunc()}</Typography>
    </Layout>
  );
};

export default SecondPage;
