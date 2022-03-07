import {
  ERROR_MAX,
  ERROR_MIN,
  ERROR_REQUIRED,
  WORLD_CUP_ITEM,
} from 'constants/contants';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUserObjProps } from 'utils/interface';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  padding-top: 50px;
`;

const Title = styled.input.attrs({ type: 'text' })`
  margin-right: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const ItemInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const ItemInput = styled.input.attrs({ type: 'text' })``;

const InputBox = styled.div`
  margin: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SubmitInput = styled.input``;

export default function MakeWorldCup({ userObj }: IUserObjProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    let listArr = [
      {
        id: uuidv4(),
        candidate: data.worldCupItem1,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem2,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem3,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem4,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem5,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem6,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem7,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem8,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem9,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem10,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem11,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem12,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem13,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem14,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem15,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
      {
        id: uuidv4(),
        candidate: data.worldCupItem16,
        roundWin: 0,
        roundLose: 0,
        champion: 0,
      },
    ];
    axios
      .post('http://localhost:4000/world', {
        title: data.title,
        list: listArr,
        id: uuidv4(),
        count: 0,
        createdAt: Date.now(),
        comments: [],
        creatorId: userObj.userId,
      })
      .then((res) => console.log('성공'))
      .catch((error) => console.log(error));

    navigate('/');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleWrapper>
          <Title
            {...register('title', {
              required: ERROR_REQUIRED,
              minLength: { value: 1, message: ERROR_MIN },
            })}
          />
          {errors.title && <p>{errors.title?.message}</p>}
          <p>월드컵</p>
        </TitleWrapper>
        <InputContainer>
          <ItemInputWrapper>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}1`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem1 && <p>{errors.worldCupItem1?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}2`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem2 && <p>{errors.worldCupItem2?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}3`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem3 && <p>{errors.worldCupItem3?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}4`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem4 && <p>{errors.worldCupItem4?.message}</p>}
            </InputBox>
          </ItemInputWrapper>
          <ItemInputWrapper>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}5`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem5 && <p>{errors.worldCupItem5?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}6`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem6 && <p>{errors.worldCupItem6?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}7`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem7 && <p>{errors.worldCupItem7?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}8`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem8 && <p>{errors.worldCupItem8?.message}</p>}
            </InputBox>
          </ItemInputWrapper>
          <ItemInputWrapper>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}9`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem9 && <p>{errors.worldCupItem9?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}10`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem10 && <p>{errors.worldCupItem10?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}11`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem11 && <p>{errors.worldCupItem11?.message}</p>}
            </InputBox>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}12`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem12 && <p>{errors.worldCupItem12?.message}</p>}
            </InputBox>
          </ItemInputWrapper>
          <ItemInputWrapper>
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}13`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem13 && <p>{errors.worldCupItem13?.message}</p>}
            </InputBox>{' '}
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}14`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem14 && <p>{errors.worldCupItem14?.message}</p>}
            </InputBox>{' '}
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}15`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem15 && <p>{errors.worldCupItem15?.message}</p>}
            </InputBox>{' '}
            <InputBox>
              <ItemInput
                {...register(`${WORLD_CUP_ITEM}16`, {
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 1,
                    message: ERROR_MIN,
                  },
                  maxLength: {
                    value: 10,
                    message: ERROR_MAX,
                  },
                })}
              />
              {errors.worldCupItem16 && <p>{errors.worldCupItem16?.message}</p>}
            </InputBox>
          </ItemInputWrapper>
        </InputContainer>
        <SubmitInput type="submit" value="보내기" />
      </Form>
    </Container>
  );
}
