scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumpTrack = 0
    }
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpTrack < 2) {
        mySprite.vy = -100
        jumpTrack += 1
    }
})
function level3 () {
    game.showLongText("Welcome to level three. Don't worry, you can't die here.", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 18))
    info.setLife(1)
    controller.moveSprite(mySprite, 100, 0)
    jumpTrack = 0
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    level3()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    level_2()
})
function secret () {
    game.splash("You found the secret chest!")
    info.setLife(1)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 . . . . . 9 9 . . . . 
        . . . . 9 . 9 . . 9 . 9 . . . . 
        . . . . 9 . . . . . . 9 9 . . . 
        . . . . 9 . 9 9 9 9 . . 9 9 . . 
        . . . . 9 9 . . . . . . 9 9 . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 . . . . . . 9 9 . . 
        . . . 9 9 . . . . . . . . 9 . . 
        . . . 9 9 . . . . . . . 9 9 . . 
        . . . . 9 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 . . . . . . . 9 . . . 
        . . . . 9 9 . . . . . . 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.setTilemap(tilemap`level2`)
    controller.moveSprite(mySprite, 100, 0)
    jumpTrack = 0
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    mySprite.setPosition(42, 41)
    info.changeLifeBy(-1)
})
function level_2 () {
    game.showLongText("Welcome to level two. Sorry, no checkpoints here.", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 2))
    info.setLife(1)
    controller.moveSprite(mySprite, 100, 0)
    jumpTrack = 0
    scene.cameraFollowSprite(mySprite)
}
function dissapearfloor () {
    for (let index = 0; index <= 15; index++) {
        tiles.setWallAt(tiles.getTileLocation(index, 10), false)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    secret()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    dissapearfloor()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.splash("Wow. I cant say I expected you to win.")
    game.over(true)
})
let jumpTrack = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
game.showLongText("Welcome to the super easy Dungeon run! Have fun and good luck completing all three stages.", DialogLayout.Bottom)
info.setLife(1)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 . . . . . 9 9 . . . . 
    . . . . 9 . 9 . . 9 . 9 . . . . 
    . . . . 9 . . . . . . 9 9 . . . 
    . . . . 9 . 9 9 9 9 . . 9 9 . . 
    . . . . 9 9 . . . . . . 9 9 . . 
    . . . . . 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 9 . . . . . . 9 9 . . 
    . . . 9 9 . . . . . . . . 9 . . 
    . . . 9 9 . . . . . . . 9 9 . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 . . . . . . . 9 . . . 
    . . . . 9 9 . . . . . . 9 9 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
jumpTrack = 0
forever(function () {
    mySprite.ay = 200
})
