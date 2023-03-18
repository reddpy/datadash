import { Button, Drawer, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import blueD from '../../assets/blueD.png';
import SidebarFooter from '../menu_components/sidebarfooter';
import SidebarLinks from '../menu_components/sidebarlinks';


const headerStyle = {
  position: 'sticky',
  top: 0, zIndex: 1,
  textAlign: 'start',
  backgroundColor: 'white',
  width: '100%',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '5px'
};


const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header style={headerStyle}>
        <Space size={275}>
          <Button type="primary" shape='circle' size='large' onClick={showDrawer} >
            <img width={25} src={blueD} />
          </Button>
        </Space>
      </Header >
      <Drawer
        title={<img style={{ width: '200px' }} src={Logo} />}
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={250}
        bodyStyle={{ padding: 0 }}
        headerStyle={{ padding: 0 }}
      >
        <SidebarLinks />
        <SidebarFooter />
      </Drawer>
    </>
  );

};

export default MobileMenu;
