import { useCallback } from "react";
import { Button, Container } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextLink from "next/link";

import { counterSlice } from "@ReduxModules/Counter";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter?.countNumber);

  const onWelcome = useCallback(() => {
    dispatch(counterSlice.actions.increment());
  }, [dispatch]);

  return (
    <Container>
      {/* <h1>Tech Stack</h1>
      <h3>
        {t("hello")} {t("world")} {t("error")} : {counter}
      </h3>
      <ButtonExample
        testID="button-example"
        onClick={onWelcome}
        gradientColor="blue"
      >
        Counter
      </ButtonExample> */}
      <NextLink href="/form" passHref>
        <Button
          color="primary"
          variant="contained"
          component="a"
        >
          Open Dynamic Form
        </Button>
      </NextLink>
    </Container>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
