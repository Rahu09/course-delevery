import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";
import parse from "html-react-parser";
import { grey } from "@mui/material/colors";

export default function BasicAccordion() {
  let { id } = useParams();
  // const [ind, setInd] = useState(0);
  type contentType = {
    name: string;
    description: string;
    html: string;
    videoLink: string;
    _id: object;
  };
  const [content, setContent] = useState<contentType[]>([]);
  // const [show, setShow] = useState({
  //   name: "",
  //   description: "",
  //   html: "",
  //   videoLink: "",
  //   _id: "",
  // });

  // const admin = useRecoilValue(userState)
  const baseUrl = localStorage.getItem("account");
  useEffect(() => {
    const allChapters = async () => {
      const res = await axios.get(`${baseUrl}/course/${id}/content`);
      setContent(res.data.chapters);
    };
    allChapters();
  }, [baseUrl, id]);

  // useEffect(() => {
  //   // console.log('curr');
  //   setShow(content[0]);
  //   setInd(0);
  // }, [content]);

  // // console.log(show);
  // const handleprev = () => {
  //   if (ind !== 0) {
  //     // console.log('prev');
  //     setShow(content[ind - 1]);
  //     setInd(ind - 1);
  //   }
  // };
  // const handlenext = () => {
  //   if (ind !== content.length - 1) {
  //     // console.log('next');
  //     setShow(content[ind + 1]);
  //     setInd(ind + 1);
  //   }
  // };
  // const handlenav = (index) => {
  //   setInd(index);
  //   setShow(content[index]);
  //   // console.log('next');
  // };

  return (
    <div style={{ width: "96vw", margin: "20px" }} className="accordion">
      {content &&
        content.map((ele, ind) => {
          return (
            <Accordion
              // TransitionProps={{ unmountOnExit: true }}
              sx={{
                color: "white",
                backgroundColor: "#2f2e4947",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#c8b6fd",
                  }}
                >
                  Chapter {ind + 1}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* ------------------------------- */}
                <div className="course--acc">
                  <div className="course--body--acc">
                    <div className="course--container--acc">
                      <div className="text--container--acc" id="style-2">
                        {ele && parse(ele.html)}
                      </div>
                      <div className="video--container--acc">
                        {ele && <YoutubeEmbed embedId={ele.videoLink} />}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
