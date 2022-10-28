export const rules = {
  name: [
    { required: true, trigger: 'blur', message: '账号是必传内容！' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5-10个的字母或者数字!',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, trigger: 'blur', message: '密码是必传内容！' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '密码必须是5-10个的字母或者数字!',
      trigger: 'blur'
    }
  ]
};
