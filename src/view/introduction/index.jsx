import { Container } from "@mui/material";
import { Chip } from "@mui/material";

const skills = ["HTML", "CSS", "JavaScript", "React", "NextJS"];
const renderedSkillChips = skills.map((skill) => {
  return (
    <Chip key={skill} label={skill} onClick={() => {}} variant="outlined" />
  );
});

const Introduction = () => {
  return (
    <Container maxWidth="lg" sx={{ flex: "1" }}>
      <div className="introductionPage">
        <div>關於我</div>
        <div className="info">目前就讀於私立中國文化大學</div>
        <div className="skill">
          學過的技能
          <div>{renderedSkillChips}</div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
