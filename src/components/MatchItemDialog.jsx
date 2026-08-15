import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import Swal from 'sweetalert2';

const DialogTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    color: #156ea8;
    text-align: center;
    padding: 16px 24px 0;
`;

const MatchCard = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 16px;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    background: #fafafa;
    margin-bottom: 12px;
    transition: all 0.2s ease;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        border-color: #156ea8;
        background: #f0f7ff;
    }
`;

const MatchImg = styled.img`
    width: 90px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
    background: #eee;
    flex-shrink: 0;
`;

const MatchInfo = styled.div`
    flex: 1;
    min-width: 0;
`;

const MatchName = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #034f96;
    margin-bottom: 8px;
    text-transform: capitalize;
`;

const MatchDetail = styled.div`
    font-size: 14px;
    color: #555;
    line-height: 1.7;
    text-transform: capitalize;
`;

const AddCartButton = styled.button`
    background: #156ea8;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background: #4f9ee8;
    }
`;

const ViewDetailButton = styled(Link)`
    background: transparent;
    color: #156ea8;
    border: 1px solid #156ea8;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease;

    &:hover {
        background: #156ea8;
        color: #fff;
    }
`;

const ButtonsRow = styled.div`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const formatSizeLabel = (sizeName) => {
    if (!sizeName) return "";
    const normalized = sizeName.toLowerCase().trim();
    if (normalized.includes("xs")) return "XS";
    if (normalized.includes("lg")) return "L";
    if (normalized.includes("sm")) return "S";
    if (normalized.includes("me")) return "M";
    return sizeName.toUpperCase();
};

const formatGenderLabel = (genderName) => {
    if (!genderName) return "";
    const normalized = genderName.toLowerCase().trim();
    if (normalized === "m") return "Male";
    if (normalized === "f") return "Female";
    if (normalized === "un") return "Unisex";
    if (normalized === "st") return "ST";
    if (normalized === "t") return "T";
    if (normalized === "c") return "C";
    if (normalized === "a") return "A";
    if (normalized === "sh") return "SH";
    if (normalized === "fs") return "FS";
    if (normalized === "slp") return "SLP";
    if (normalized === "other") return "Other";
    return genderName.toUpperCase();
};

const MatchItemDialog = ({ open, close, items, url, fallbackImage, matchGroupId, parentItem }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (match) => {
        if (parentItem) {
            dispatch(addProduct(parentItem));
        }

        dispatch(
            addProduct({
                unitid: match.id,
                unitname: match.website_display_name || match.unit_name,
                unitcode: match.unit_code,
                unitimg: match.image || "",
                color: match.colour_name,
                size: match.size_name,
                fabric: match.fabric_name,
                quantity: 1,
                price: match.order_price,
                productId: match.item_id,
                matchGroupId: parentItem?.matchGroupId || matchGroupId,
                isMatchParent: false
            })
        );

        close();

        Swal.fire({
            title: "Success!",
            text: "Successfully added to cart.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
    };

    return (
        <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
            <DialogTitle>Matching Product</DialogTitle>
            <DialogContent>
                {(items || []).map((match) => {
                    const productUrl = `/product/${match.item_id}`;
                    return (
                        <MatchCard key={match.id}>
                            <MatchImg
                                src={match.image
                                    ? url + match.image
                                    : fallbackImage}
                                alt={match.website_display_name || match.unit_name || "Product"}
                                onError={(e) => {
                                    if (fallbackImage && e.currentTarget.src !== fallbackImage) {
                                        e.currentTarget.src = fallbackImage;
                                    }
                                }}
                            />
                            <MatchInfo>
                                <MatchName>{match.website_display_name || match.unit_name}</MatchName>
                                {match.size_name && <MatchDetail>Size: {formatSizeLabel(match.size_name)}</MatchDetail>}
                                {match.colour_name && <MatchDetail>Colour: {match.colour_name}</MatchDetail>}
                                {match.fabric_name && <MatchDetail>Fabric: {match.fabric_name}</MatchDetail>}
                                {match.gender_name && <MatchDetail>Gender: {formatGenderLabel(match.gender_name)}</MatchDetail>}
                                {match.order_price && (
                                    <MatchDetail><strong>{Number(match.order_price).toLocaleString()} MMK</strong></MatchDetail>
                                )}
                            </MatchInfo>
                            <ButtonsRow>
                                <AddCartButton onClick={() => handleAddToCart(match)}>
                                    Add to Cart
                                </AddCartButton>
                                <ViewDetailButton to={productUrl} onClick={close}>
                                    View Detail
                                </ViewDetailButton>
                            </ButtonsRow>
                        </MatchCard>
                    );
                })}
            </DialogContent>
            <DialogActions>
                <Button onClick={close} style={{ backgroundColor: 'red', color: 'white' }}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MatchItemDialog;
