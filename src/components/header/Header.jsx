import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledHeader = styled.header`
    background: linear-gradient(135deg, #000000 0%, #0a0a0a 100%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(68, 168, 244, 0.15);
    position: sticky;
    top: 0;
    z-index: 1000;

    .nav_logo {
        padding: 15px 30px;
        font-family: 'Courier New', monospace;
        letter-spacing: 2px;

        .nav-logo-link {
            text-decoration: none;
            font-size: 22px;
            color: #ffffff;
            font-weight: 900;
            background: linear-gradient(135deg, #ffffff 0%, #44a8f4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.3s ease;

            &:hover {
                letter-spacing: 3px;
            }
        }
    }

    .menuToggleBtn {
        display: none;
        color: #44a8f4;
        font-size: 24px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all 0.3s ease;
        background: none;
        border: none;
        padding: 8px;

        &:hover {
            color: #6dd5f8;
            transform: translateY(-50%) scale(1.1);
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        .menuToggleBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            right: 0;
            top: 0;
            transform: none;
            padding: 15px 20px;
        }
    }
`;

const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 40px;
    gap: 5px;

    li {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 13px;
        letter-spacing: 1px;
        position: relative;
        transition: all 0.3s ease;

        &:hover {
            a {
                color: #6dd5f8;
            }
        }
    }

    .nav-menu-list {
        text-decoration: none;
        color: #ffffff;
        display: block;
        padding: 12px 16px;
        transition: all 0.3s ease;
        position: relative;
        text-transform: uppercase;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 16px;
            right: 16px;
            height: 2px;
            background: linear-gradient(90deg, #44a8f4, #6dd5f8);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }

    @media screen and (max-width: 768px) {
        display: ${(props) => (props.isToggleOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        margin-right: 0;
        gap: 0;
        border-top: 1px solid rgba(68, 168, 244, 0.15);

        li {
            width: 100%;
        }

        .nav-menu-list {
            padding: 16px 20px;
            border-bottom: 1px solid rgba(68, 168, 244, 0.1);
        }
    }
`;

const Header = () => {
	const [isToggleOpen, setIsToggleOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsToggleOpen(!isToggleOpen);
	};

	const handleCloseMenu = () => {
		setIsToggleOpen(false);
	};

	return (
		<StyledHeader>
			<div className="nav_logo">
				<Link to="/" className="nav-logo-link" onClick={handleCloseMenu}>
					GEarheads
				</Link>
			</div>

			<NavMenu isToggleOpen={isToggleOpen}>
				<li>
					<a
						href="https://www.firstinspires.org/robotics/ftc"
						className="nav-menu-list"
						target="_blank"
						rel="noopener noreferrer"
						onClick={handleCloseMenu}
					>
						FIRST
					</a>
				</li>
				<li>
					<a href="/#outreach" className="nav-menu-list" onClick={handleCloseMenu}>
						Outreach
					</a>
				</li>
				<li>
					<a href="/#contact" className="nav-menu-list" onClick={handleCloseMenu}>
						Contact
					</a>
				</li>
				<li>
					<a href="/#timeline" className="nav-menu-list" onClick={handleCloseMenu}>
						Seasons
					</a>
				</li>
			</NavMenu>

			<button className="menuToggleBtn" onClick={handleToggleOpen} aria-label="Toggle navigation">
				{isToggleOpen ? <FaTimes /> : <FaBars />}
			</button>
		</StyledHeader>
	);
};

export default Header;
