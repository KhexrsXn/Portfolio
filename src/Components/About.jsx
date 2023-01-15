import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Me from '../Images/Me.jpg'
import '../Style/About.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="about" id="about">
      <div className="aboutSection">
        <div className="aboutRow">
          <div className="aboutImg">
            <img src={Me} alt="" />
          </div>
          <div className="aboutText">
            <h1 className="aboutTitle">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              nulla, quibusdam sit ad, ex, mollitia cupiditate vero optio
              molestiae minima deleniplaceat impedit animi! Eveniet dicta magni,
              obcaecati id adipisci neque vel dolores distinctio atque placeat
              fugit delectus laborum illo et repellendaliquid corrupti eius?
              Ullam, sint! Modi, minus ipsum.
            </p>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div className="TabLabel">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      sx={{ color: 'whitesmoke' }}
                      label="Skills"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{ color: 'whitesmoke' }}
                      label="Experience"
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{ color: 'whitesmoke' }}
                      label="Education"
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </div>
              </Box>
              <TabPanel value={value} index={0}>
                <div className="AboutDiv">
                  <div className="Aboutleft">
                    <h2>Front-End</h2> <br />
                    <ul>
                      <li class="bx bxl-html5 icon"> HTML</li> <br />
                      <li class="bx bxl-css3 icon"> CSS</li> <br />
                      <li class="bx bxl-bootstrap icon"> Bootstrap</li> <br />
                      <li class="bx bxl-javascript icon"> Javascript</li> <br />
                      <li class="bx bxl-react icon"> React</li>
                    </ul>
                  </div>
                  <div className="Aboutright">
                    <h2>Back-End</h2> <br />
                    <ul>
                      <li class="bx bxl-postgresql icon"> MySQL</li> <br />
                      <li class="bx bxl-php icon"> PHP</li> <br />
                      <li class="bx bxl-nodejs icon"> Node.Js</li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ul>
                  <li>
                    <span>2022 - Current</span>
                    <br />
                    Full-Stack Web Development Bootcamp at KodeGo
                  </li>
                  <br />
                  <li>
                    <span>2018-2022</span>
                    <br />
                    Freelance Makeup Artist
                  </li>{' '}
                  <br />
                  <li>
                    <span>2014-2022</span>
                    <br />
                    Performing Arts
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ul>
                  <li>
                    <span>2022</span>
                    <br />
                    Bs Information Technology, Degree Holder <br />
                    Northern Mindanao Colleges, Inc.
                  </li>{' '}
                  <br />
                  <li>
                    <span>2018</span>
                    <br />
                    Northern Mindanao Colleges, INC. Senior High
                  </li>{' '}
                  <br />
                  <li>
                    <span>2015</span>
                    <br />
                    Northern Mindanao Colleges, INC. Junior High
                  </li>{' '}
                  <br />
                  <li>
                    <span>2012</span>
                    <br />
                    Calibunan Elementary School
                  </li>
                </ul>
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}
