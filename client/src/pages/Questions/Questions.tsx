import { Box, Container, IconButton, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import QTypeChoice from '../../components/Questions/QTypeChoice';
import QTypeTyping from '../../components/Questions/QTypeTyping';
import { useEffect } from 'react';
import { userChapterData } from '../../common/data/chapterData';
import QuestionProgress from '../../components/Progress/QuestionProgress';
import { grey } from '@mui/material/colors';
export default function Questions() {
  const navigate = useNavigate();
  const handleLearningExit = () => {
    const conf = confirm('학습을 종료하시겠습니까?');
    if (conf) {
      navigate('/');
    }
  };
  useEffect(() => {
    // 챕터에서 풀지 않은 문제 번호
    // TODO : 로컬스토리지에서 가져오기, 챕터 진행상황 상세조회 api 연결
    const learnQuestionNum = userChapterData.progress.findIndex(
      (el) => el === 0
    );

    // 문제타입 별 렌더링
  }, []);
  function handleQTypeRender() {}
  return (
    <Container
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        height: '100vh'
      }}
      maxWidth={false}
      disableGutters
    >
      <Box
        sx={{
          width: '100%',
          textAlign: 'right',
          padding: '20px',
          position: 'relative'
        }}
      >
        <QuestionProgress progress={userChapterData.progress} />
        <IconButton
          aria-label="delete"
          size="large"
          onClick={handleLearningExit}
        >
          <CloseRoundedIcon fontSize={'large'} />
        </IconButton>
      </Box>
      <Container
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          marginTop: '30px',
          height: '100vh'
        }}
      >
        <QTypeChoice />
        <QTypeTyping />
      </Container>
      <Box sx={{ width: '100%', padding: '20px' }} bgcolor={grey[300]}></Box>
    </Container>
  );
}
