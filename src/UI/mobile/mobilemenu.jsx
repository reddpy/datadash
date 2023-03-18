import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import blueD from '../../assets/blueD.png'
import SidebarLinks from '../menu_components/sidebarlinks';
import Logo from '../../assets/Logo.png'
import SidebarFooter from '../menu_components/sidebarfooter';


const MobileMenu = () => {
    const [current, setCurrent] = useState('mail');

    const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
      return (
      <>
       <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title={<img style={{width:'200px'}} src={Logo}/>}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={250}
        bodyStyle={{padding: 0}}
        headerStyle={{padding:0}}
      >
       <SidebarLinks/>
       <SidebarFooter/>
      </Drawer>
    </>
      
      );
};

export default MobileMenu;
