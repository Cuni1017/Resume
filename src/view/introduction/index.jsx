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
      <div className="introductionPage flex flex-wrap flex-col md:flex-row h-auto justify-center pt-10">
        <div className="w-full md:w-[320px] flex items-center justify-center mb-6">
          <img
            className="overflow-hidden rounded-[100%] w-[160px] h-[160px] md:w-[240px] md:h-[240px] xl:w-[320px] xl:h-[320px]"
            src="/src/assets/catherine-heath-i4W8OINLI_I-unsplash.jpg"
          />
        </div>
        <div className="flex-1 pl-8">
          <div className="text-3xl font-bold mb-2">關於我</div>
          <div className="text-xl info">目前就讀於私立中國文化大學</div>
          <div className="skill font-bold text-xl mt-2">
            學過的技能
            <div className="mt-2">{renderedSkillChips}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
