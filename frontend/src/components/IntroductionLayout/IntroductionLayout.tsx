import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./IntroductionLayout.styles";
import { LinkItem, TitleLayoutProps } from "./IntroductionLayout.interface";
import LinkComponent from "@components/LinkComponent/LinkComponent";

function TitleLayout(props: TitleLayoutProps) {
  const {
    rootTitle: { title, blurbs, subtitle, links },
    description,
  } = props;

  const classes = useStyle();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignContent="flex-start"
      className={classes.title_container}
    >
      <Grid item lg={6} md={12} className={classes.title_container}>
        <Typography variant="h3">{title}</Typography>

        {blurbs?.map((blurb) => {
          return (
            <Typography key={blurb} variant="h4">
              {blurb}
            </Typography>
          );
        })}

        <Typography
          variant="body2"
          style={{ fontSize: "12px", color: "#426164" }}
        >
          {subtitle.title}
        </Typography>

        {subtitle.description.map((descriptionItem: string) => {
          return (
            <Typography
              key={descriptionItem}
              variant="body2"
              style={{ fontSize: "12px", color: "#426164" }}
            >
              {descriptionItem}
            </Typography>
          );
        })}

        {links &&
          links.map((link: LinkItem) => {
            return (
              <LinkComponent key={link.label} {...link} />
            );
          })}
      </Grid>

      <Grid item lg={6} md={12}>
        <Typography variant="body1">{description}</Typography>
      </Grid>
    </Grid>
  );
}

export default TitleLayout;
