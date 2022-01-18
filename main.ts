enum ActionKind {
    Walking,
    Idle,
    Jumping,
    wf,
    bw,
    wl,
    wb,
    wr,
    sr,
    sl,
    sf,
    sb,
    skelHit
}
namespace SpriteKind {
    export const mob = SpriteKind.create()
    export const skeleton = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const bonus = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(runner, ActionKind.wf)
})
sprites.onOverlap(SpriteKind.skeleton, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.say(">:)")
    info.changeLifeBy(-1)
    skelCount += -1
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bonus, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.baDing.play()
    if (bonustype == 0) {
        speed += 5
    } else if (bonustype == 1) {
        cdTime += 50
    } else if (bonustype == 2) {
        fireAngle += 1
    } else {
        info.changeLifeBy(1)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(runner, ActionKind.sb)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.mob, function (sprite, otherSprite) {
    otherSprite.say("X(")
    otherSprite.destroy(effects.fire, 200)
    sprite.destroy()
    coin = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    coin,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    200,
    true
    )
    coin.setPosition(otherSprite.x, otherSprite.y)
    batCount += -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(runner, ActionKind.wl)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(runner, ActionKind.sr)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(runner, ActionKind.sl)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    otherSprite.destroy()
    level += 1
    music.magicWand.play()
    startLevel()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.skeleton, function (sprite, otherSprite) {
    otherSprite.say("X(")
    otherSprite.destroy(effects.fire, 200)
    sprite.destroy()
    coin = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    coin,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    200,
    true
    )
    coin.setPosition(otherSprite.x, otherSprite.y)
    skelCount += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(runner, ActionKind.wr)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(runner, ActionKind.sf)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(runner, ActionKind.wb)
})
function runnerAnimation () {
    wf = animation.createAnimation(ActionKind.wf, 100)
    wf.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    wf.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `)
    wf.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    wf.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `)
    animation.attachAnimation(runner, wf)
    wb = animation.createAnimation(ActionKind.wb, 100)
    wb.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    wb.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . f f e 4 1 f d d f 1 4 e f . . 
        f d f f e 4 d d d d 4 e f e . . 
        f b f e f 2 2 2 2 e d d 4 e . . 
        f b f 4 f 2 2 2 2 e d d e . . . 
        f c f . f 4 4 5 5 f e e . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `)
    wb.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `)
    wb.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f f . 
        . . e f e 4 d d d d 4 e f f d f 
        . . e 4 d d e 2 2 2 2 f e f b f 
        . . . e d d e 2 2 2 2 f 4 f b f 
        . . . . e e f 5 5 4 4 f . f c f 
        . . . . . f f f f f f f . f f . 
        . . . . . . . . . f f f . . . . 
        `)
    animation.attachAnimation(runner, wb)
    wl = animation.createAnimation(ActionKind.wl, 100)
    wl.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    wl.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    wl.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    wl.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    animation.attachAnimation(runner, wl)
    wr = animation.createAnimation(ActionKind.wr, 100)
    wr.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    wr.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    wr.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    wr.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    animation.attachAnimation(runner, wr)
    sf = animation.createAnimation(ActionKind.sf, 0)
    sf.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    animation.attachAnimation(runner, sf)
    sb = animation.createAnimation(ActionKind.sb, 0)
    sb.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    animation.attachAnimation(runner, sb)
    sl = animation.createAnimation(ActionKind.sl, 0)
    sl.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    animation.attachAnimation(runner, sl)
    sr = animation.createAnimation(ActionKind.sr, 0)
    sr.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    animation.attachAnimation(runner, sr)
}
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.startEffect(effects.halo)
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
function startLevel () {
    if (level == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level2`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level3`)
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level4`)
    } else if (level == 4) {
        tiles.setTilemap(tilemap`level5`)
    } else if (level == 5) {
        tiles.setTilemap(tilemap`level6`)
    } else if (level == 6) {
        tiles.setTilemap(tilemap`level7`)
    } else if (level == 7) {
        game.over(true, effects.confetti)
    }
    porNum = 0
    tiles.placeOnRandomTile(runner, assets.tile`tile1`)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    scene.cameraFollowSprite(runner)
    for (let value4 of tiles.getTilesByType(assets.tile`tile2`)) {
        skel = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.skeleton)
        animation.runImageAnimation(
        skel,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111ffff.....
            ......fffcdb1bc111cf....
            ....fc111cbfbf1b1b1f....
            ....f1b1b1ffffbfbfbf....
            ....fbfbfffffff.........
            .........fffff..........
            ..........fff...........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .....ffff111111bf.......
            ....fc111cdb1bdfff......
            ....f1b1bcbfbfc111cf....
            ....fbfbfbffff1b1b1f....
            .........fffffffbfbf....
            ..........fffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
        tiles.placeOnTile(skel, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
        skel.follow(runner, speed)
        skelCount += 1
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile3`)) {
        bat = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.mob)
        animation.runImageAnimation(
        bat,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c . . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f b 3 b c 3 b c f b b c c c . 
            . c b b b b b b c f b c b c c . 
            . c b b b b b b c b b c b b c . 
            c b 1 b b b 1 b b b c c c b c . 
            c b b b b b b b b c c c c c . . 
            f b c b b b c b b b b f c . . . 
            f b 1 f f f 1 b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . c c . . c c . . . . . . . . 
            . . c 3 c c 3 c c c . . . . . . 
            . c b 3 b c 3 b c c c . . . . . 
            . c b b b b b b b b f f . . . . 
            c c b b b b b b b b f f . . . . 
            c b 1 b b b 1 b b c f f f . . . 
            c b b b b b b b b f f f f . . . 
            f b c b b b c b c c b b b . . . 
            f b 1 f f f 1 b f c c c c . . . 
            . f b b b b b b f b b c c . . . 
            c c f b b b b b c c b b c . . . 
            c c c f f f f f f c c b b c . . 
            . c c c . . . . . . c c c c c . 
            . . c c c . . . . . . . c c c c 
            . . . . . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c b 1 b b b 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(bat, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
        batCount += 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.mob, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    otherSprite.say(">:)")
    batCount += 5
})
let buff: Sprite = null
let Por: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let facing = 0
let bat: Sprite = null
let skel: Sprite = null
let porNum = 0
let sr: animation.Animation = null
let sl: animation.Animation = null
let sb: animation.Animation = null
let sf: animation.Animation = null
let wr: animation.Animation = null
let wl: animation.Animation = null
let wb: animation.Animation = null
let wf: animation.Animation = null
let coin: Sprite = null
let bonustype = 0
let runner: Sprite = null
let sCount = 0
let cdTime = 0
let life = 0
let speed = 0
let level = 0
scene.setBackgroundColor(15)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
game.showLongText("Enter a level you want to start on", DialogLayout.Bottom)
level = game.askForNumber("", 1)
while (level >= 7) {
    game.showLongText("Please enter a number smaller than 7", DialogLayout.Bottom)
    level = game.askForNumber("", 1)
}
game.showLongText("Enter the difficulty you want", DialogLayout.Bottom)
let difficulty = game.askForNumber("", 1)
while (difficulty >= 4) {
    game.showLongText("Please enter a number smaller than 3", DialogLayout.Bottom)
    difficulty = game.askForNumber("", 1)
}
if (difficulty == 0) {
    speed = 30
    life = 5
    cdTime = 500
    sCount = 1
} else if (difficulty == 1) {
    speed = 50
    life = 3
    sCount = 2
} else if (difficulty == 2) {
    speed = 70
    life = 2
    cdTime = 750
    sCount = 3
} else {
    speed = 80
    life = 2
    cdTime = 750
    sCount = 4
}
let fireTime = 0
let projectileVelocity = 150
let mobFireTime = 0
let cdMobTime = 1000
let batCount = 0
let skelCount = 0
runner = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
runner.setPosition(90, 90)
controller.moveSprite(runner)
let fireAngle = 0
light.setBrightness(8)
runnerAnimation()
startLevel()
effects.starField.startScreenEffect()
info.setScore(0)
info.setLife(life)
game.onUpdate(function () {
    if (runner.vx < 0) {
        facing = 3
    } else if (runner.vx > 0) {
        facing = 1
    } else if (runner.vy < 0) {
        facing = 0
    } else if (runner.vy > 0) {
        facing = 2
    }
    if (controller.A.isPressed()) {
        if (game.runtime() > fireTime + cdTime && fireAngle == 0) {
            if (facing == 0) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0, 0 - projectileVelocity)
            } else if (facing == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, projectileVelocity, 0)
            } else if (facing == 2) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0, projectileVelocity)
            } else if (facing == 3) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0 - projectileVelocity, 0)
            }
            fireTime = game.runtime()
            music.pewPew.play()
        } else if (game.runtime() > fireTime + cdTime) {
            fireTime = game.runtime()
            music.pewPew.play()
            if (facing == 0) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0, 0 - projectileVelocity)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 60, 0 - projectileVelocity)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, -60, 0 - projectileVelocity)
            } else if (facing == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, projectileVelocity, 0)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, projectileVelocity, 60)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, projectileVelocity, -60)
            } else if (facing == 2) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0, projectileVelocity)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 60, projectileVelocity)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, -60, projectileVelocity)
            } else if (facing == 3) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0 - projectileVelocity, 0)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0 - projectileVelocity, 60)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, runner, 0 - projectileVelocity, -60)
            }
        }
    }
})
game.onUpdate(function () {
    if (game.runtime() > mobFireTime + cdMobTime && batCount > 0) {
        for (let value of sprites.allOfKind(SpriteKind.mob)) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . c c c c c 
                . . . . . . . . . c c 7 7 7 6 c 
                . . . . . . . . c c 7 7 7 c c . 
                . . . . . . . . c 6 7 7 c . . . 
                . . . . . . . . c 6 6 6 c . . . 
                . . . c c c c c c 6 6 6 c c . . 
                . . c 6 7 7 7 7 6 c c 6 6 6 c . 
                . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
                c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
                c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
                f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
                f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
                . c 1 c f f 1 c 7 6 f 6 6 c c . 
                . c c c c c c c c c c c c . . . 
                `, value, 0, speed)
            projectile2.setKind(SpriteKind.projectile2)
            mobFireTime = game.runtime()
        }
    }
})
game.onUpdateInterval(500, function () {
    if (batCount + skelCount == 0 && porNum == 0) {
        Por = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . c c b b 3 b 3 3 b b c c . . 
            . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
            c d d b 3 3 b 3 3 b 3 3 b d d c 
            f c c c d d c d d c d d c c c f 
            f b 3 c c c b c c b c c c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.portal)
        tiles.placeOnRandomTile(Por, sprites.castle.rock1)
        animation.runImageAnimation(
        Por,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . c c b b 3 b 3 3 b b c c . . 
            . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
            c d d b 3 3 b 3 3 b 3 3 b d d c 
            f c c c d d c d d c d d c c c f 
            f b 3 c c c b c c b c c c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `,img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c 8 9 9 8 c b b f . . 
            . . c c c f 9 3 1 9 f c c c . . 
            . c 3 f f f 9 3 3 9 f f f 3 c . 
            c 3 f f f f 8 9 9 8 f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `],
        500,
        true
        )
        porNum = 1
        for (let value2 of tiles.getTilesByType(sprites.castle.rock1)) {
            tiles.setTileAt(value2, assets.tile`transparency16`)
        }
        bonustype = randint(0, 3)
        if (bonustype == 0) {
            buff = sprites.create(img`
                . . . . c c c b b b b b . . . . 
                . . c c b 4 4 4 4 4 4 b b b . . 
                . c c 4 4 4 4 4 5 4 4 4 4 b c . 
                . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
                e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
                e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
                e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
                . e b 4 4 4 4 4 5 4 4 4 4 b e . 
                8 7 e e b 4 4 4 4 4 4 b e e 6 8 
                8 7 2 e e e e e e e e e e 2 7 8 
                e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
                e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
                e b e 8 8 c c 8 8 c c c 8 e b e 
                e e b e c c e e e e e c e b e e 
                . e e b b 4 4 4 4 4 4 4 4 e e . 
                . . . c c c c c e e e e e . . . 
                `, SpriteKind.bonus)
            buff.setPosition(150, 100)
        } else if (bonustype == 1) {
            buff = sprites.create(img`
                . . . . . 3 3 b 3 3 d d 3 3 . . 
                . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
                . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
                . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
                . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
                . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
                . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
                . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
                . 4 4 d 1 1 1 1 1 1 d d d b b . 
                . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
                4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
                4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
                4 5 5 d 5 5 d b b b d d 3 . . . 
                4 5 5 5 d d d d 4 4 b 3 . . . . 
                . 4 5 5 5 4 4 4 . . . . . . . . 
                . . 4 4 4 . . . . . . . . . . . 
                `, SpriteKind.bonus)
            buff.setPosition(150, 100)
        } else if (bonustype == 2) {
            buff = sprites.create(img`
                ...........222222ee.............
                .........2233333bbeee...........
                .......2233d1111333bee..........
                ......23ddd111dd1d33eee.........
                .....23d1333d1d33d13bee.........
                ....23d133333d1d33313eee........
                ...2311333333ddd3333dbeee.......
                ..2313333333333ddd33d3e44e......
                ..21d3333333333ddd333db44ee.....
                .2313333333333dd33333db444ee....
                .2dd3333333333d333333d3b444e....
                2311d333333333d333333ddbb444e...
                2d131d33333333d333333d1b6644e...
                2d33dd33333333d333333d1b44444e..
                21333d3333333d3333333d1644664ee.
                21333d333333d33333333d16b64464be
                21333dddd33dd33333333d1646446b6e
                2133333dd11dd33333333d1644b6446e
                e133333d1d31d33333333d1b4446446e
                e1333331d3331333333331d6bb44b6e.
                e1333331dd331b3333333136bb6bb6e.
                e13333331dd1db33333331b6b66bbe..
                edd33333311db3333333dd6bb6bbe...
                e3d3333333d333333333136beebbe...
                .edd3333333d3333333ddbfeebbe....
                .e3dd33333dd3333333d3efeeee.....
                ..e3dd333d1333333dd3bfffff......
                ...e311111ddd333dddbffeef.......
                ....eed1d33d111113befeff........
                ......eeb333dd13beffff..........
                ........eeeefffffee.............
                ................................
                `, SpriteKind.bonus)
            buff.setPosition(150, 100)
        } else {
            buff = sprites.create(img`
                . . . . . . . . . . . 6 6 6 6 6 
                . . . . . . . . . 6 6 7 7 7 7 8 
                . . . . . . 8 8 8 7 7 8 8 6 8 8 
                . . e e e e c 6 6 8 8 . 8 7 8 . 
                . e 2 5 4 2 e c 8 . . . 6 7 8 . 
                e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
                e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
                e 2 e e 2 2 2 2 e e e e c 6 8 . 
                c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
                . c 2 e e e 2 e 2 4 2 2 2 2 c . 
                . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
                . . . e c c e c 2 2 2 2 2 2 2 e 
                . . . . . . . c 2 e e 2 2 e 2 c 
                . . . . . . . c e e e e e e 2 c 
                . . . . . . . . c e 2 2 2 2 c . 
                . . . . . . . . . c c c c c . . 
                `, SpriteKind.bonus)
            buff.setPosition(150, 100)
        }
    }
})
