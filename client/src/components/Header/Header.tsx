import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Stack,
  IconButton,
  Tooltip
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUser } from '../../redux/slices/user';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY as chapterKey } from '../../queries/useAllUserChapterQuery';
import { getUserWordIds } from '../../pages/Word/methods';
import AlertDialog from '../Dialogs/AlertDialog';
interface HeaderProp {
  invisiblePath?: boolean;
}
export default function Header(props: HeaderProp) {
  const navigate = useNavigate();
  const { pathname: location } = useLocation();

  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    queryClient.invalidateQueries([chapterKey, userInfo.userId]);
    dispatch(
      setUser({
        email: '',
        username: '',
        userId: 1,
        nickname: '',
        point: 0,
        memberStatus: false
      })
    );

    navigate('/');
  };

  const [loginDialogOpen, setloginDialogOpen] = useState(false);
  function navigateOnLoggedIn(page: string) {
    if (userInfo.memberStatus) {
      navigate(page);
    } else {
      setloginDialogOpen(true);
    }
  }

  const wordIds = getUserWordIds();

  const [enterWordsDialogOpen, setEnterWordsDialogOpen] = useState(false);
  const enterWords = () => {
    if (wordIds.length === 0) {
      setEnterWordsDialogOpen(true);
    } else {
      navigateOnLoggedIn('/my-word');
    }
  };

  return (
    <>
      <AlertDialog
        open={loginDialogOpen}
        setOpen={setloginDialogOpen}
        title="로그인 후 이용해 주세요."
        content="회원만 이용이 가능합니다."
      ></AlertDialog>
      <AlertDialog
        open={enterWordsDialogOpen}
        setOpen={setEnterWordsDialogOpen}
        title="단어장 기능"
        content="단어장이 비었습니다."
      ></AlertDialog>
      <AppBar
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: alpha('#f5f7fa', 0.8),
          boxShadow: 'none',
          position: props.invisiblePath ? 'sticky' : 'fixed',
          height: '70px'
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: props.invisiblePath
                ? 'flex-end'
                : 'space-between',
              width: '100%',
              paddingRight: props.invisiblePath ? '15px' : null
            }}
          >
            {props.invisiblePath ? null : (
              <Link to="/">
                <img src="./images/main-logo.png" alt="Main Logo" />
              </Link>
            )}

            <Stack direction={'row'} spacing={1}>
              {userInfo.memberStatus ? (
                <>
                  <Tooltip title="단어장">
                    <IconButton
                      onClick={enterWords}
                      sx={{
                        width: '40px',
                        height: '40px',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                        color: userInfo.memberStatus
                          ? 'primary.main'
                          : 'default'
                      }}
                    >
                      <ClassOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="내 정보">
                    <IconButton
                      onClick={() => navigateOnLoggedIn('/my-page')}
                      sx={{
                        width: '40px',
                        height: '40px',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                        color: userInfo.memberStatus
                          ? 'primary.main'
                          : 'default'
                      }}
                    >
                      <PersonOutlineOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="로그아웃">
                    <IconButton
                      onClick={handleLogout}
                      sx={{
                        width: '40px',
                        height: '40px',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
                        color: 'default'
                      }}
                    >
                      <LogoutOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </>
              ) : location === '/sign-up' || location === '/sign-in' ? null : (
                <Link to="/sign-in">
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    endIcon={<LoginOutlinedIcon fontSize="small" />}
                    sx={{ textTransform: 'none' }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
