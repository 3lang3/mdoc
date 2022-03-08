import React from 'react';
import { Link } from 'react-router-dom';
import MenuLink from '../MenuLink';
import './index.less';

const MenuTitle = ({ item }) => {
  if (!item.isLink || !item.path)
    return <div className="vant-doc-menu__title">{item.title}</div>;
  return (
    <Link to={item.langPath} className="vant-doc-menu__title">
      {item.title}
    </Link>
  );
};

const Menu = props => {
  const { menus } = props;

  return (
    <div className="vant-doc-menu">
      <div className="vant-doc-menu__group">
        {menus.map((item, key) => (
          <React.Fragment key={key}>
            {item.children && item.title ? (
              <MenuTitle item={item} />
            ) : null}
            {item.children ? (
              item.children.map(c => (
                <div key={c.path} className="vant-doc-menu__item">
                  <MenuLink item={c} />
                </div>
              ))
            ) : (
              <div key={item.path} className="vant-doc-menu__item">
                <MenuLink item={item} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Menu;
