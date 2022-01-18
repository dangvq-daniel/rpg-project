class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    wf = 3
    bw = 4
    wl = 5
    wb = 6
    wr = 7
    sr = 8
    sl = 9
    sf = 10
    sb = 11
@namespace
class SpriteKind:
    mob = SpriteKind.create()
    skeleton = SpriteKind.create()
    projectile2 = SpriteKind.create()
    portal = SpriteKind.create()

def on_up_pressed():
    animation.set_action(runner, ActionKind.wf)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    global skelCount
    sprite.destroy()
    info.change_life_by(-1)
    skelCount += -1
sprites.on_overlap(SpriteKind.skeleton, SpriteKind.player, on_on_overlap)

def on_down_released():
    animation.set_action(runner, ActionKind.sb)
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_on_overlap2(sprite, otherSprite):
    global coin, batCount
    otherSprite.destroy(effects.fire, 200)
    sprite.destroy()
    coin = sprites.create(img("""
            . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . .
        """),
        SpriteKind.food)
    animation.run_image_animation(coin,
        [img("""
                . . b b b b . . 
                        . b 5 5 5 5 b . 
                        b 5 d 3 3 d 5 b 
                        b 5 3 5 5 1 5 b 
                        c 5 3 5 5 1 d c 
                        c d d 1 1 d d c 
                        . f d d d d f . 
                        . . f f f f . .
            """),
            img("""
                . . b b b . . . 
                        . b 5 5 5 b . . 
                        b 5 d 3 d 5 b . 
                        b 5 3 5 1 5 b . 
                        c 5 3 5 1 d c . 
                        c 5 d 1 d d c . 
                        . f d d d f . . 
                        . . f f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 1 5 b . 
                        . b 5 3 1 5 b . 
                        . c 5 3 1 d c . 
                        . c 5 1 d d c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . . b 1 1 b . . 
                        . . b 5 5 b . . 
                        . . b d d b . . 
                        . . c d d c . . 
                        . . c 3 3 c . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 1 d 5 b . 
                        . b 5 1 3 5 b . 
                        . c d 1 3 5 c . 
                        . c d d 1 5 c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b b . . 
                        . . b 5 5 5 b . 
                        . b 5 d 3 d 5 b 
                        . b 5 1 5 3 5 b 
                        . c d 1 5 3 5 c 
                        . c d d 1 d 5 c 
                        . . f d d d f . 
                        . . . f f f . .
            """)],
        200,
        True)
    coin.set_position(otherSprite.x, otherSprite.y)
    batCount += -1
sprites.on_overlap(SpriteKind.projectile, SpriteKind.mob, on_on_overlap2)

def on_left_pressed():
    animation.set_action(runner, ActionKind.wl)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    animation.set_action(runner, ActionKind.sr)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    animation.set_action(runner, ActionKind.sl)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_on_overlap3(sprite, otherSprite):
    global level
    otherSprite.destroy()
    level += 1
    music.magic_wand.play()
    startLevel()
sprites.on_overlap(SpriteKind.player, SpriteKind.portal, on_on_overlap3)

def on_on_overlap4(sprite, otherSprite):
    global coin, skelCount
    otherSprite.destroy(effects.fire, 200)
    sprite.destroy()
    coin = sprites.create(img("""
            . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . .
        """),
        SpriteKind.food)
    animation.run_image_animation(coin,
        [img("""
                . . b b b b . . 
                        . b 5 5 5 5 b . 
                        b 5 d 3 3 d 5 b 
                        b 5 3 5 5 1 5 b 
                        c 5 3 5 5 1 d c 
                        c d d 1 1 d d c 
                        . f d d d d f . 
                        . . f f f f . .
            """),
            img("""
                . . b b b . . . 
                        . b 5 5 5 b . . 
                        b 5 d 3 d 5 b . 
                        b 5 3 5 1 5 b . 
                        c 5 3 5 1 d c . 
                        c 5 d 1 d d c . 
                        . f d d d f . . 
                        . . f f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 1 5 b . 
                        . b 5 3 1 5 b . 
                        . c 5 3 1 d c . 
                        . c 5 1 d d c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . . b 1 1 b . . 
                        . . b 5 5 b . . 
                        . . b d d b . . 
                        . . c d d c . . 
                        . . c 3 3 c . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 1 d 5 b . 
                        . b 5 1 3 5 b . 
                        . c d 1 3 5 c . 
                        . c d d 1 5 c . 
                        . . f d d f . . 
                        . . . f f . . .
            """),
            img("""
                . . . b b b . . 
                        . . b 5 5 5 b . 
                        . b 5 d 3 d 5 b 
                        . b 5 1 5 3 5 b 
                        . c d 1 5 3 5 c 
                        . c d d 1 d 5 c 
                        . . f d d d f . 
                        . . . f f f . .
            """)],
        200,
        True)
    coin.set_position(otherSprite.x, otherSprite.y)
    skelCount += -1
sprites.on_overlap(SpriteKind.projectile, SpriteKind.skeleton, on_on_overlap4)

def on_right_pressed():
    animation.set_action(runner, ActionKind.wr)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_released():
    animation.set_action(runner, ActionKind.sf)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_down_pressed():
    animation.set_action(runner, ActionKind.wb)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def runnerAnimation():
    global wf, wb, wl, wr, sf, sb, sl, sr
    wf = animation.create_animation(ActionKind.wf, 100)
    wf.add_animation_frame(img("""
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
    """))
    wf.add_animation_frame(img("""
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
    """))
    wf.add_animation_frame(img("""
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
    """))
    wf.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, wf)
    wb = animation.create_animation(ActionKind.wb, 100)
    wb.add_animation_frame(img("""
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
    """))
    wb.add_animation_frame(img("""
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
    """))
    wb.add_animation_frame(img("""
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
    """))
    wb.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, wb)
    wl = animation.create_animation(ActionKind.wl, 100)
    wl.add_animation_frame(img("""
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
    """))
    wl.add_animation_frame(img("""
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
    """))
    wl.add_animation_frame(img("""
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
    """))
    wl.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, wl)
    wr = animation.create_animation(ActionKind.wr, 100)
    wr.add_animation_frame(img("""
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
    """))
    wr.add_animation_frame(img("""
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
    """))
    wr.add_animation_frame(img("""
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
    """))
    wr.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, wr)
    sf = animation.create_animation(ActionKind.sf, 0)
    sf.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, sf)
    sb = animation.create_animation(ActionKind.sb, 0)
    sb.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, sb)
    sl = animation.create_animation(ActionKind.sl, 0)
    sl.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, sl)
    sr = animation.create_animation(ActionKind.sr, 0)
    sr.add_animation_frame(img("""
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
    """))
    animation.attach_animation(runner, sr)

def on_on_overlap5(sprite, otherSprite):
    sprite.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.projectile2, SpriteKind.player, on_on_overlap5)

def on_on_overlap6(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.destroy()
    music.ba_ding.play()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap6)

def startLevel():
    global porNum, skel, skelCount, bat, batCount
    if level == 0:
        tiles.set_tilemap(tiles.create_tilemap(hex("""
                    10000e000a09080706050a0908070605040302010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d17181918191918191818191819191813100000000000230f24002300000000111a00000000000000000000000000001110200f0000000000000000000000211b1a000000000000000000000f0000001b1a00000000000000000000000000001110000000000000000000000000000011100000000000000000000000000000111a20001e1f00000000000000000021111a00001c1d00000000000000000000111a000000000022000e0022000000001b14151515151616151515161615161612
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 . . . . . 2 . . . 2 . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 2 . . . . . . . . . . . . 2 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 2 . 2 2 . . . . . . . . . 2 2 
                                2 . . 2 2 . . . . . . . . . . 2 
                                2 . . . . . 2 . . . 2 . . . . 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                """),
                [myTiles.transparency16,
                    sprites.builtin.crowd9,
                    sprites.builtin.crowd8,
                    sprites.builtin.crowd7,
                    sprites.builtin.crowd6,
                    sprites.builtin.crowd5,
                    sprites.builtin.crowd4,
                    sprites.builtin.crowd3,
                    sprites.builtin.crowd2,
                    sprites.builtin.crowd1,
                    sprites.builtin.crowd0,
                    sprites.builtin.forest_tiles1,
                    sprites.builtin.forest_tiles2,
                    sprites.builtin.forest_tiles3,
                    myTiles.tile1,
                    myTiles.tile2,
                    sprites.dungeon.green_outer_west0,
                    sprites.dungeon.green_outer_east0,
                    sprites.dungeon.green_outer_south_west,
                    sprites.dungeon.green_outer_north_east,
                    sprites.dungeon.green_outer_south_east,
                    sprites.dungeon.green_outer_south0,
                    sprites.dungeon.green_outer_south1,
                    sprites.dungeon.green_outer_north_west,
                    sprites.dungeon.green_outer_north0,
                    sprites.dungeon.green_outer_north1,
                    sprites.dungeon.green_outer_west1,
                    sprites.dungeon.green_outer_east1,
                    sprites.dungeon.green_inner_south_west,
                    sprites.dungeon.green_inner_south_east,
                    sprites.dungeon.green_inner_north_west,
                    sprites.dungeon.green_inner_north_east,
                    sprites.dungeon.green_outer_east2,
                    sprites.dungeon.green_outer_west2,
                    sprites.dungeon.green_outer_north2,
                    sprites.dungeon.green_outer_south2,
                    sprites.castle.rock1],
                TileScale.SIXTEEN))
    elif level == 1:
        tiles.set_tilemap(tiles.create_tilemap(hex("""
                    100010000a09080706050a0908070605040302010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d17181918191918191818191819191813100000000023000f24002300000000111a00000000000000000000000000001110000f0000000000000000000000001b1a20000000000f000000001e1f00211b1a0000000f0000000000001c1d000011100000000000000000000000000000111000000000000f0000000f00000000111a00001e1f00000000000000000000111a20001c1d00000000000000000021111a00000000000000000000000000001b1a00000000000000000000000000001b1a000000220000000e0000220000001b14151515151516161616161616161612
                """),
                img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 . . . . 2 . . . . 2 . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 2 . . . . . . . . . 2 2 . . 2 
                                2 . . . . . . . . . . 2 2 . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . 2 2 . . . . . . . . . . 2 
                                2 2 . 2 2 . . . . . . . . . 2 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . . . . . . . . . . . . . 2 
                                2 . . . 2 . . . . . . 2 . . . 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                """),
                [myTiles.transparency16,
                    sprites.builtin.crowd9,
                    sprites.builtin.crowd8,
                    sprites.builtin.crowd7,
                    sprites.builtin.crowd6,
                    sprites.builtin.crowd5,
                    sprites.builtin.crowd4,
                    sprites.builtin.crowd3,
                    sprites.builtin.crowd2,
                    sprites.builtin.crowd1,
                    sprites.builtin.crowd0,
                    sprites.builtin.forest_tiles1,
                    sprites.builtin.forest_tiles2,
                    sprites.builtin.forest_tiles3,
                    myTiles.tile1,
                    myTiles.tile2,
                    sprites.dungeon.green_outer_west0,
                    sprites.dungeon.green_outer_east0,
                    sprites.dungeon.green_outer_south_west,
                    sprites.dungeon.green_outer_north_east,
                    sprites.dungeon.green_outer_south_east,
                    sprites.dungeon.green_outer_south0,
                    sprites.dungeon.green_outer_south1,
                    sprites.dungeon.green_outer_north_west,
                    sprites.dungeon.green_outer_north0,
                    sprites.dungeon.green_outer_north1,
                    sprites.dungeon.green_outer_west1,
                    sprites.dungeon.green_outer_east1,
                    sprites.dungeon.green_inner_south_west,
                    sprites.dungeon.green_inner_south_east,
                    sprites.dungeon.green_inner_north_west,
                    sprites.dungeon.green_inner_north_east,
                    sprites.dungeon.green_outer_east2,
                    sprites.dungeon.green_outer_west2,
                    sprites.dungeon.green_outer_north2,
                    sprites.dungeon.green_outer_south2,
                    sprites.castle.rock1],
                TileScale.SIXTEEN))
    elif level == 2:
        tiles.set_tilemap(tiles.create_tilemap(hex("""
                    100013000a09080706050a0908070605040302010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d14151615161615161515161516161512100f0f00001f000020001f00000000111700000000000000000000000000001110000000000000000000001b1c000018171d000000000000000000191a001e181700000000000000000000000000001110000000000000000000000000000011100000000000000000000000000000111700001b1c0000000000000000000011171d00191a2100000000210000001e11170000000000000000000000000000181700000000000000000000000000001817000000000000000000001b1c0000181700000000000000000000191a0000181700000000000000000000000000001817000000240000000e0000240000001813232323232323232323232323232322
                """),
                img("""
                    ................
                                ................
                                2222222222222222
                                2....2....2....2
                                2..............2
                                2..........22..2
                                22.........22..2
                                2..............2
                                2..............2
                                2..............2
                                2..22..........2
                                22.22..........2
                                2..............2
                                2..............2
                                2..........22..2
                                2..........22..2
                                2..............2
                                2...2......2...2
                                2222222222222222
                """),
                [myTiles.transparency16,
                    sprites.builtin.crowd9,
                    sprites.builtin.crowd8,
                    sprites.builtin.crowd7,
                    sprites.builtin.crowd6,
                    sprites.builtin.crowd5,
                    sprites.builtin.crowd4,
                    sprites.builtin.crowd3,
                    sprites.builtin.crowd2,
                    sprites.builtin.crowd1,
                    sprites.builtin.crowd0,
                    sprites.builtin.forest_tiles1,
                    sprites.builtin.forest_tiles2,
                    sprites.builtin.forest_tiles3,
                    myTiles.tile1,
                    myTiles.tile2,
                    sprites.dungeon.green_outer_west0,
                    sprites.dungeon.green_outer_east0,
                    sprites.dungeon.green_outer_north_east,
                    sprites.dungeon.green_outer_south_east,
                    sprites.dungeon.green_outer_north_west,
                    sprites.dungeon.green_outer_north0,
                    sprites.dungeon.green_outer_north1,
                    sprites.dungeon.green_outer_west1,
                    sprites.dungeon.green_outer_east1,
                    sprites.dungeon.green_inner_south_west,
                    sprites.dungeon.green_inner_south_east,
                    sprites.dungeon.green_inner_north_west,
                    sprites.dungeon.green_inner_north_east,
                    sprites.dungeon.green_outer_east2,
                    sprites.dungeon.green_outer_west2,
                    sprites.dungeon.green_outer_south2,
                    sprites.castle.rock1,
                    myTiles.tile3,
                    sprites.dungeon.green_outer_south_west,
                    sprites.dungeon.green_outer_south0,
                    sprites.dungeon.green_outer_north2],
                TileScale.SIXTEEN))
    elif level == 3:
        tiles.set_tilemap(tiles.create_tilemap(hex("""
                    100013000a09080706050a0908070605040302010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d131415141515141514141514151514110f000000001e00001f001e0000000010160000000000000000000000000000100f000000000000000000001a1b000017161c0000000000000000001819001d17160000000020000000002000000000100f0000000000000000000000000000100f0000000000002000000000000000101600001a1b0000000000000000000010161c0018190020000020000000001d10160000000000000000000000000000171600000000000000000000000000001716000000000000000000001a1b000017160000000000000000000018190000171600000000000000000000000000001716000000230000000e0000230000001712222222222222222222222222222221
                """),
                img("""
                    ................
                                ................
                                2222222222222222
                                2....2....2....2
                                2..............2
                                2..........22..2
                                22.........22.22
                                2..............2
                                2..............2
                                2..............2
                                2..22..........2
                                22.22.........22
                                2..............2
                                2..............2
                                2..........22..2
                                2..........22..2
                                2..............2
                                2...2......2...2
                                2222222222222222
                """),
                [myTiles.transparency16,
                    sprites.builtin.crowd9,
                    sprites.builtin.crowd8,
                    sprites.builtin.crowd7,
                    sprites.builtin.crowd6,
                    sprites.builtin.crowd5,
                    sprites.builtin.crowd4,
                    sprites.builtin.crowd3,
                    sprites.builtin.crowd2,
                    sprites.builtin.crowd1,
                    sprites.builtin.crowd0,
                    sprites.builtin.forest_tiles1,
                    sprites.builtin.forest_tiles2,
                    sprites.builtin.forest_tiles3,
                    myTiles.tile1,
                    sprites.dungeon.green_outer_west0,
                    sprites.dungeon.green_outer_east0,
                    sprites.dungeon.green_outer_north_east,
                    sprites.dungeon.green_outer_south_east,
                    sprites.dungeon.green_outer_north_west,
                    sprites.dungeon.green_outer_north0,
                    sprites.dungeon.green_outer_north1,
                    sprites.dungeon.green_outer_west1,
                    sprites.dungeon.green_outer_east1,
                    sprites.dungeon.green_inner_south_west,
                    sprites.dungeon.green_inner_south_east,
                    sprites.dungeon.green_inner_north_west,
                    sprites.dungeon.green_inner_north_east,
                    sprites.dungeon.green_outer_east2,
                    sprites.dungeon.green_outer_west2,
                    sprites.dungeon.green_outer_south2,
                    sprites.castle.rock1,
                    myTiles.tile3,
                    sprites.dungeon.green_outer_south_west,
                    sprites.dungeon.green_outer_south0,
                    sprites.dungeon.green_outer_north2],
                TileScale.SIXTEEN))
    elif level == 4:
        tiles.set_tilemap(tiles.create_tilemap(hex("""
                    100013000a09080706050a0908070605040302010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d1415161516161516151516151616151210000000001f000020001f0000000011170f000000000000000000000000001110000000000000000000001b1c000018171d000000000000000000191a001e18170000000f00000000000f000000001110000000000000000000000000000f11100000000000000000000000000000111700001b1c0000000000000000000011171d00191a0000000000000000001e11170000000021000021002100000000181700000000000021000000000000001817000000000000000000001b1c0000181700000000000000000000191a0000181700000000000000000000000000001817000000240000000e0000240000001813232323232323232323232323232322
                """),
                img("""
                    ................
                                ................
                                2222222222222222
                                2....2....2....2
                                2..............2
                                2..........22..2
                                22.........22.22
                                2..............2
                                2..............2
                                2..............2
                                2..22..........2
                                22.22.........22
                                2..............2
                                2..............2
                                2..........22..2
                                2..........22..2
                                2..............2
                                2...2......2...2
                                2222222222222222
                """),
                [myTiles.transparency16,
                    sprites.builtin.crowd9,
                    sprites.builtin.crowd8,
                    sprites.builtin.crowd7,
                    sprites.builtin.crowd6,
                    sprites.builtin.crowd5,
                    sprites.builtin.crowd4,
                    sprites.builtin.crowd3,
                    sprites.builtin.crowd2,
                    sprites.builtin.crowd1,
                    sprites.builtin.crowd0,
                    sprites.builtin.forest_tiles1,
                    sprites.builtin.forest_tiles2,
                    sprites.builtin.forest_tiles3,
                    myTiles.tile1,
                    myTiles.tile2,
                    sprites.dungeon.green_outer_west0,
                    sprites.dungeon.green_outer_east0,
                    sprites.dungeon.green_outer_north_east,
                    sprites.dungeon.green_outer_south_east,
                    sprites.dungeon.green_outer_north_west,
                    sprites.dungeon.green_outer_north0,
                    sprites.dungeon.green_outer_north1,
                    sprites.dungeon.green_outer_west1,
                    sprites.dungeon.green_outer_east1,
                    sprites.dungeon.green_inner_south_west,
                    sprites.dungeon.green_inner_south_east,
                    sprites.dungeon.green_inner_north_west,
                    sprites.dungeon.green_inner_north_east,
                    sprites.dungeon.green_outer_east2,
                    sprites.dungeon.green_outer_west2,
                    sprites.dungeon.green_outer_south2,
                    sprites.castle.rock1,
                    myTiles.tile3,
                    sprites.dungeon.green_outer_south_west,
                    sprites.dungeon.green_outer_south0,
                    sprites.dungeon.green_outer_north2],
                TileScale.SIXTEEN))
    elif level == 5:
        tiles.set_tilemap(tiles.create_tilemap(hex("""
                    100013000a09080706050a0908070605040302010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d1415161516161516151516151616151210000000001f000f20001f00000000111700000000000000000000000000001110000f00000000000000001b1c000018171d000000000f00000000191a001e18170000000f0000000000000000000011100000000000000000000000000000111000000000000f0000000f00000f00111700001b1c0000000000000000000011171d00191a2100000000210000001e111700000f000000000000000000000018170000000000000000000000000f001817000f00000000000000001b1c0000181700000000000000000000191a00001817000f0000000000000000000000001817000000240000000e0000240000001813232323232323232323232323232322
                """),
                img("""
                    ................
                                ................
                                2222222222222222
                                2....2....2....2
                                2..............2
                                2..........22..2
                                22.........22..2
                                2..............2
                                2..............2
                                2..............2
                                2..22..........2
                                22.22..........2
                                2..............2
                                2..............2
                                2..........22..2
                                2..........22..2
                                2..............2
                                2...2......2...2
                                2222222222222222
                """),
                [myTiles.transparency16,
                    sprites.builtin.crowd9,
                    sprites.builtin.crowd8,
                    sprites.builtin.crowd7,
                    sprites.builtin.crowd6,
                    sprites.builtin.crowd5,
                    sprites.builtin.crowd4,
                    sprites.builtin.crowd3,
                    sprites.builtin.crowd2,
                    sprites.builtin.crowd1,
                    sprites.builtin.crowd0,
                    sprites.builtin.forest_tiles1,
                    sprites.builtin.forest_tiles2,
                    sprites.builtin.forest_tiles3,
                    myTiles.tile1,
                    myTiles.tile2,
                    sprites.dungeon.green_outer_west0,
                    sprites.dungeon.green_outer_east0,
                    sprites.dungeon.green_outer_north_east,
                    sprites.dungeon.green_outer_south_east,
                    sprites.dungeon.green_outer_north_west,
                    sprites.dungeon.green_outer_north0,
                    sprites.dungeon.green_outer_north1,
                    sprites.dungeon.green_outer_west1,
                    sprites.dungeon.green_outer_east1,
                    sprites.dungeon.green_inner_south_west,
                    sprites.dungeon.green_inner_south_east,
                    sprites.dungeon.green_inner_north_west,
                    sprites.dungeon.green_inner_north_east,
                    sprites.dungeon.green_outer_east2,
                    sprites.dungeon.green_outer_west2,
                    sprites.dungeon.green_outer_south2,
                    sprites.castle.rock1,
                    myTiles.tile3,
                    sprites.dungeon.green_outer_south_west,
                    sprites.dungeon.green_outer_south0,
                    sprites.dungeon.green_outer_north2],
                TileScale.SIXTEEN))
    elif level == 6:
        tiles.set_tilemap(tiles.create_tilemap(hex("""
                    100013000a09080706050a0908070605040302010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d1415161516161516151516151616151210000000001f000f20001f0000000011170f0f0f0f0f0f0f0f0f0f0f0000001110000f00000000000000001b1c000018171d000000000f00000000191a001e18170000000f0000000f0f000000000011100000000000000000000f0f0f0f00111000000000000f0000000f00000f00111700001b1c0000000000000000000011171d00191a2121212121210000001e111700000f000000000000000000000018170000000000000000000000000f001817000000000000000000001b1c0000181700000000000000000000191a0000181700000000000000000000000000001817000000240000000e0000240000001813232323232323232323232323232322
                """),
                img("""
                    ................
                                ................
                                2222222222222222
                                2....2....2....2
                                2..............2
                                2..........22..2
                                22.........22..2
                                2..............2
                                2..............2
                                2..............2
                                2..22..........2
                                22.22..........2
                                2..............2
                                2..............2
                                2..........22..2
                                2..........22..2
                                2..............2
                                2...2......2...2
                                2222222222222222
                """),
                [myTiles.transparency16,
                    sprites.builtin.crowd9,
                    sprites.builtin.crowd8,
                    sprites.builtin.crowd7,
                    sprites.builtin.crowd6,
                    sprites.builtin.crowd5,
                    sprites.builtin.crowd4,
                    sprites.builtin.crowd3,
                    sprites.builtin.crowd2,
                    sprites.builtin.crowd1,
                    sprites.builtin.crowd0,
                    sprites.builtin.forest_tiles1,
                    sprites.builtin.forest_tiles2,
                    sprites.builtin.forest_tiles3,
                    myTiles.tile1,
                    myTiles.tile2,
                    sprites.dungeon.green_outer_west0,
                    sprites.dungeon.green_outer_east0,
                    sprites.dungeon.green_outer_north_east,
                    sprites.dungeon.green_outer_south_east,
                    sprites.dungeon.green_outer_north_west,
                    sprites.dungeon.green_outer_north0,
                    sprites.dungeon.green_outer_north1,
                    sprites.dungeon.green_outer_west1,
                    sprites.dungeon.green_outer_east1,
                    sprites.dungeon.green_inner_south_west,
                    sprites.dungeon.green_inner_south_east,
                    sprites.dungeon.green_inner_north_west,
                    sprites.dungeon.green_inner_north_east,
                    sprites.dungeon.green_outer_east2,
                    sprites.dungeon.green_outer_west2,
                    sprites.dungeon.green_outer_south2,
                    sprites.castle.rock1,
                    myTiles.tile3,
                    sprites.dungeon.green_outer_south_west,
                    sprites.dungeon.green_outer_south0,
                    sprites.dungeon.green_outer_north2],
                TileScale.SIXTEEN))
    elif level == 7:
        game.over(True, effects.confetti)
    if info.life() < life:
        info.change_life_by(1)
    porNum = 0
    tiles.place_on_random_tile(runner, myTiles.tile1)
    for value in tiles.get_tiles_by_type(myTiles.tile1):
        tiles.set_tile_at(value, myTiles.transparency16)
    scene.camera_follow_sprite(runner)
    for value4 in tiles.get_tiles_by_type(myTiles.tile2):
        skel = sprites.create(img("""
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
            """),
            SpriteKind.skeleton)
        animation.run_image_animation(skel,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(skel, value4)
        tiles.set_tile_at(value4, myTiles.transparency16)
        skel.follow(runner, speed)
        skelCount += 1
    for value5 in tiles.get_tiles_by_type(myTiles.tile3):
        bat = sprites.create(img("""
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
            """),
            SpriteKind.mob)
        animation.run_image_animation(bat,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(bat, value5)
        tiles.set_tile_at(value5, myTiles.transparency16)
        batCount += 1
Por: Sprite = None
projectile22: Sprite = None
projectile: Sprite = None
facing = 0
bat: Sprite = None
skel: Sprite = None
porNum = 0
sr: animation.Animation = None
sl: animation.Animation = None
sb: animation.Animation = None
sf: animation.Animation = None
wr: animation.Animation = None
wl: animation.Animation = None
wb: animation.Animation = None
wf: animation.Animation = None
coin: Sprite = None
runner: Sprite = None
cdTime = 0
life = 0
speed = 0
level = 0
scene.set_background_color(15)
scene.set_background_image(img("""
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
"""))
level = game.ask_for_number("", 1)
difficulty = game.ask_for_number("", 1)
if difficulty == 0:
    speed = 30
    life = 5
    cdTime = 500
elif difficulty == 1:
    speed = 50
    life = 3
    cdTime = 750
elif difficulty == 2:
    speed = 70
    life = 1
    cdTime = 900
else:
    speed = 100
    life = 1
    cdTime = 1000
fireTime = 0
projectileVelocity = 150
mobFireTime = 0
cdMobTime = 1000
batCount = 0
skelCount = 0
runner = sprites.create(img("""
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
    """),
    SpriteKind.player)
runner.set_position(90, 90)
controller.move_sprite(runner)
light.set_brightness(8)
runnerAnimation()
startLevel()
effects.star_field.start_screen_effect()
info.set_score(0)
info.set_life(life)

def on_on_update():
    global facing, projectile, fireTime
    if runner.vx < 0:
        facing = 3
    elif runner.vx > 0:
        facing = 1
    elif runner.vy < 0:
        facing = 0
    elif runner.vy > 0:
        facing = 2
    if controller.B.is_pressed():
        if game.runtime() > fireTime + cdTime:
            if facing == 0:
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    runner,
                    0,
                    0 - projectileVelocity)
            elif facing == 1:
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    runner,
                    projectileVelocity,
                    0)
            elif facing == 2:
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    runner,
                    0,
                    projectileVelocity)
            elif facing == 3:
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    runner,
                    0 - projectileVelocity,
                    0)
            fireTime = game.runtime()
game.on_update(on_on_update)

def on_on_update2():
    global projectile22, mobFireTime
    if game.runtime() > mobFireTime + cdMobTime and batCount > 0:
        for value2 in sprites.all_of_kind(SpriteKind.mob):
            projectile22 = sprites.create_projectile_from_sprite(img("""
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
                """),
                value2,
                0,
                speed)
            projectile22.set_kind(SpriteKind.projectile2)
            mobFireTime = game.runtime()
game.on_update(on_on_update2)

def on_update_interval():
    global Por, porNum
    if batCount + skelCount == 0 and porNum == 0:
        Por = sprites.create(img("""
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
            """),
            SpriteKind.portal)
        tiles.place_on_random_tile(Por, sprites.castle.rock1)
        animation.run_image_animation(Por,
            [img("""
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
                """),
                img("""
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
                """)],
            500,
            True)
        porNum = 1
        for value22 in tiles.get_tiles_by_type(sprites.castle.rock1):
            tiles.set_tile_at(value22, myTiles.transparency16)
game.on_update_interval(500, on_update_interval)
