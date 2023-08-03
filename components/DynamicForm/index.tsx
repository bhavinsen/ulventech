import { RootState } from '@/pages/store';
import { addUser, getUser } from '@/Redux/Actions';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TextareaAutosize } from '@mui/base';
import { setLoading } from "@/Redux/Actions";

const DynamicForm = () => {
  const dispatch = useDispatch();
  const [values, setValue] = useState<any[]>([])
  const users = useSelector((state: RootState) => state.myReducer.users);
  const loadingState = useSelector((state: any) => state.myReducer.loading);
  const { data } = useSelector((state: any) => state.myReducer);

  const handleClick = () => {
    dispatch(setLoading(true))

    const payloadData: any = {};
    values.forEach((val) => {
      payloadData[val.fieldName] = val.value;
    });
    setTimeout(() => {
      dispatch(addUser(payloadData))
      dispatch(setLoading(false));
    }, 1500)

  }

  useEffect(() => {
    dispatch(getUser())
  }, [])

  useEffect(() => {
    if (users && users.data) {
      setValue(users.data);
    }
  }, [users])

  return (
    <>
      <div className='main-form'>
        <Typography variant='h3' className='title'>Dynamic Form</Typography>
        <>
          {
            values &&
            <div className='field-row'>
              {values?.map((val: any, i: any) =>
                <>
                  {val.type === 'select' &&
                    <FormControl>
                      <InputLabel>{val.fieldName}</InputLabel>
                      <Select
                        disabled={loadingState}
                        fullWidth
                        key={i}
                        value={val.value}
                        label={val.fieldName}
                        onChange={(e) => {
                          const updatedValues = [...values];
                          updatedValues[i].value = e.target.value;
                          setValue(updatedValues);
                        }}
                      >
                        {val.options.map((option: any, i: any) =>
                          <MenuItem key={i} value={option}>{option}</MenuItem>
                        )}

                      </Select>
                    </FormControl>
                  }
                  {val.type === 'multiline' &&
                    <TextareaAutosize disabled={loadingState} key={i} placeholder={val.fieldName} value={val.value}
                      onChange={(e) => {
                        const updatedValues = [...values];
                        updatedValues[i].value = e.target.value;
                        setValue(updatedValues);
                      }}
                    />
                  }
                  {val.type === 'number' && <TextField disabled={loadingState} key={i} type='number' label={val.fieldName} value={val.value} variant="outlined"
                    onChange={(e) => {
                      const updatedValues = [...values];
                      updatedValues[i].value = e.target.value;
                      setValue(updatedValues);
                    }}
                  />}
                  {val.type === 'text' && <TextField disabled={loadingState} key={i} type='text' label={val.fieldName} value={val.value} variant="outlined"
                    onChange={(e) => {
                      const updatedValues = [...values];
                      updatedValues[i].value = e.target.value;
                      setValue(updatedValues);
                    }}
                  />}
                  {val.type === 'email' && <TextField disabled={loadingState} key={i} type='email' label={val.fieldName} value={val.value} variant="outlined"
                    onChange={(e) => {
                      const updatedValues = [...values];
                      updatedValues[i].value = e.target.value;
                      setValue(updatedValues);
                    }}
                  />}
                </>
              )}
            </div>
          }
        </>
        <div className='submit-btn'>
          <Button disabled={loadingState} onClick={handleClick} variant="contained">Submit</Button>
        </div>
        <div className='response-main'>
          {data !== undefined && <Typography variant='h4'>Response</Typography>}
          <Typography><code>{JSON.stringify(data)}</code></Typography>
        </div>
      </div>
    </>
  )
}

export default DynamicForm