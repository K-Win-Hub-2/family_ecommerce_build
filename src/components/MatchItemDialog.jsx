import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import styled from 'styled-components';

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

    &:last-child {
        margin-bottom: 0;
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

const formatSizeLabel = (sizeName) => {
    if (!sizeName) return "";
    const normalized = sizeName.toLowerCase().trim();
    // if (normalized.includes("xxl")) return "XXL";
    // if (normalized.includes("xl")) return "XL";
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

const MatchItemDialog = ({ open, close, items, url, onAdd, fallbackImage }) => {
    return (
        <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
            <DialogTitle>Matching Product</DialogTitle>
            <DialogContent>
                {(items || []).map((match) => (
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
                            {match.colour_name && <MatchDetail>Colour: {match.colour_name}</MatchDetail>}
                            {match.fabric_name && <MatchDetail>Fabric: {match.fabric_name}</MatchDetail>}
                            {match.size_name && <MatchDetail>Size: {formatSizeLabel(match.size_name)}</MatchDetail>}
                            {match.gender_name && <MatchDetail>Gender: {formatGenderLabel(match.gender_name)}</MatchDetail>}
                            {match.order_price && (
                                <MatchDetail><strong>{Number(match.order_price).toLocaleString()} MMK</strong></MatchDetail>
                            )}
                        </MatchInfo>
                    </MatchCard>
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={close} style={{ backgroundColor: 'red', color: 'white' }}>Close</Button>
                <Button onClick={onAdd} style={{ backgroundColor: '#156ea8', color: 'white' }}>Add to cart</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MatchItemDialog;